FROM centos:centos7
MAINTAINER wanggilim <wanggilim@gmail.com>
LABEL maintainer="wanggilim"
LABEL maintainer_mail="wanggilim@gmail.com"

RUN yum -y update && yum -y upgrade
RUN yum install -y systemd bash tar unzip curl wget sudo alternatives net-tools openssh-server openssh-client which
RUN yum clean all
RUN ln -sf /bin/bash /bin/sh
RUN echo "root:root" | chpasswd

RUN (cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ $i == systemd-tmpfiles-setup.service ] || rm -f $i; done); \
    rm -f /lib/systemd/system/multi-user.target.wants/*;\
    rm -f /etc/systemd/system/*.wants/*;\
    rm -f /lib/systemd/system/local-fs.target.wants/*; \
    rm -f /lib/systemd/system/sockets.target.wants/*udev*; \
    rm -f /lib/systemd/system/sockets.target.wants/*initctl*; \
    rm -f /lib/systemd/system/basic.target.wants/*;\
    rm -f /lib/systemd/system/anaconda.target.wants/*;

VOLUME ["/sys/fs/cgroup"]
CMD ["/usr/sbin/init"]

ENTRYPOINT [ "/bin/bash" ]
FROM centos:7
MAINTAINER wanggilim <wanggilim@gmail.com>
LABEL maintainer="wanggilim"
LABEL maintainer_mail="wanggilim@gmail.com"

RUN yum -y update && yum -y upgrade
RUN yum install -y systemd bash tar unzip curl wget sudo alternatives net-tools openssh-server openssh-client which
RUN yum clean all
RUN ln -sf /bin/bash /bin/sh
RUN echo "root:root" | chpasswd

ENTRYPOINT [ "/bin/bash" ]
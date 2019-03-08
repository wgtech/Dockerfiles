FROM ubuntu:18.04
MAINTAINER wanggilim
LABEL maintainer="wanggilim"
LABEL maintainer_email="wanggilim@gmail.com"

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install bash locales tar unzip gzip wget \
    build-essential curl net-tools sudo vim vim-doc \
    openssh-server openssh-client openssl
RUN ln -sf /bin/bash /bin/sh
RUN systemctl enable ssh.socket
RUN echo "root:root" | chpasswd

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

ENTRYPOINT [ "/bin/bash", "-c", "service ssh start && /bin/bash" ]
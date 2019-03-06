FROM ubuntu:18.04
MAINTAINER wanggilim
LABEL maintainer="wanggilim"
LABEL maintainer_email="wanggilim@gmail.com"

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install bash tar unzip gzip wget \
    build-essential curl net-tools sudo openssh-server openssh-client

RUN ln -sf /bin/bash /bin/sh
RUN systemctl enable ssh.socket

RUN echo "root:root" | chpasswd

ENTRYPOINT [ "/bin/bash", "-c", "service ssh start && /bin/bash" ]
FROM centos:centos7
MAINTAINER wanggilim <wanggilim@gmail.com>
LABEL maintainer="wanggilim"
LABEL maintainer_mail="wanggilim@gmail.com"

RUN yum -y update
RUN yum -y upgrade
RUN yum install -y bash tar unzip curl wget alternatives net-tools
RUN yum install -y openssh-server openssh-client
RUN ln -sf /bin/bash /bin/sh
RUN echo "root:root" | chpasswd
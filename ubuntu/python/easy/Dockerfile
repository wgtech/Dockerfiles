FROM wanggilim/ubuntu:latest
MAINTAINER wanggilim
LABEL maintainer="wanggilim"
LABEL maintainer_email="wanggilim@gmail.com"

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install python3-all
RUN ln -s /usr/bin/python3 /usr/bin/python

WORKDIR /tmp
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python get-pip.py
RUN rm get-pip.py

RUN pip install --upgrade pip setuptools

WORKDIR /

ENTRYPOINT [ "/bin/bash" ]
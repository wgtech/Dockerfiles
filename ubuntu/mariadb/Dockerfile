FROM wgtech/ubuntu:18.04
MAINTAINER wgtech
LABEL maintainer="wgtech"
LABEL maintainer_email="wgtech.dev@gmail.com"

USER root

RUN apt-get -y install software-properties-common
RUN apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8
RUN add-apt-repository 'deb [arch=amd64] http://ftp.kaist.ac.kr/mariadb/repo/10.3/ubuntu bionic main'
RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install mariadb-server

ENTRYPOINT [ "/bin/bash", "-c", "service mysql start && /bin/bash" ]
# root, 1234


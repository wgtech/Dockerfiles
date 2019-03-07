#
# 
#  DEPRECATED!
# 
# 

FROM wanggilim/ubuntu:18.04

ENV PYTHON_VERSION 3.6.8

RUN mkdir -p /opt/python/$PYTHON_VERSION
RUN ln -s /opt/python/$PYTHON_VERSION /opt/python/current
ENV PYTHON_HOME /opt/python/current

RUN mkdir -p /tmp
WORKDIR /tmp
RUN wget -q https://www.python.org/ftp/python/$PYTHON_VERSION/Python-$PYTHON_VERSION.tgz
RUN apt-get -y install zlib1g-dev libc-dev libffi-dev ncurses-dev
RUN tar -xzf Python-$PYTHON_VERSION.tgz
WORKDIR /tmp/Python-$PYTHON_VERSION
RUN ./configure --prefix=/opt/python/$PYTHON_VERSION
RUN make --silent
RUN make --silent install

ENV PATH $PYTHON_HOME/bin:$PATH

WORKDIR /opt/python/current/bin

RUN ln -s idle3 idle \
    && ln -s pydoc3 pydoc \
    && ln -s python3 python \
    && ln -s python3-config python-config \
    && ln -s pip3 pip

WORKDIR /tmp
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python get-pip.py
RUN rm get-pip.py
RUN rm -rf /tmp/Python-$PYTHON_VERSION*

RUN python -m pip install --trusted-host pypi.org \
    --trusted-host files.pythonhosted.org \
    --upgrade pip setuptools
RUN python --version
RUN pip --version

ENTRYPOINT [ "/bin/bash" ]
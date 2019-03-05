FROM wanggilim/alpine:3.9

ENV PYTHON_VERSION 3.6.8

RUN mkdir -p /tmp
WORKDIR /tmp
RUN wget -q https://www.python.org/ftp/python/$PYTHON_VERSION/Python-$PYTHON_VERSION.tgz

RUN apk add --no-cache bzip2-dev coreutils dpkg-dev dpkg \
    expat-dev findutils gcc gdbm-dev libc-dev libffi-dev libnsl-dev libtirpc-dev \
    linux-headers make ncurses-dev openssl-dev pax-utils readline-dev sqlite-dev \
    tcl-dev tk tk-dev xz-dev zlib-dev

RUN tar -xzf Python-$PYTHON_VERSION.tgz
RUN rm Python-$PYTHON_VERSION.tgz

RUN mkdir -p /opt/python
RUN mv Python-$PYTHON_VERSION $PYTHON_VERSION && mv $PYTHON_VERSION /opt/python/

RUN ln -s /opt/python/$PYTHON_VERSION /opt/python/current

ENV PYTHON_HOME /opt/python/current

WORKDIR /opt/python/current

RUN ./configure --prefix=/opt/python/$PYTHON_VERSION
RUN make --silent
RUN make --silent install

WORKDIR /opt/python/current/bin

RUN ln -s idle3 idle \
    && ln -s pydoc3 pydoc \
    && ln -s python3 python \
    && ln -s python3-config python-config \
    && ln -s pip3 pip

ENV PATH $PYTHON_HOME/bin:$PATH

RUN python --version
RUN pip --version

ENTRYPOINT [ "python" ]
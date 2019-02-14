FROM alpine:3.9
LABEL maintainer="wanggilim"
LABEL maintainer_email="wanggilim@gmail.com"
RUN apk update
RUN apk upgrade
RUN apk add --no-cache bash tar unzip wget
RUN apk add --no-cache curl net-tools openrc
RUN ln -sf /bin/bash /bin/sh
RUN echo "root:root" | chpasswd

ENTRYPOINT [ "/bin/bash" ]
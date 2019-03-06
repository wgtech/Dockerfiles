FROM wanggilim/python-alpine:3.6.8-alpine3.9

ENV DJANGO_VERSION 2.1.7

RUN pip install --upgrade pip
RUN pip install setuptools --upgrade

RUN pip install django==$DJANGO_VERSION

# Recommend directory for making your an django app.
RUN mkdir -p /app

# DO NOT TOUCH start-django.sh, and install-requirements.sh on 'app' directory.
# ADD YOUR django Project on 'djangoProject' directory.
WORKDIR /app
ADD ./djangoProject /app
WORKDIR /app

RUN chmod +x ./*.sh
RUN ./install-requirements.sh
#RUN ./start-django.sh

ENTRYPOINT [ "./start-django.sh" ] 
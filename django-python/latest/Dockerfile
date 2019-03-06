FROM wanggilim/python-alpine:latest

RUN pip install --upgrade pip
RUN pip install setuptools --upgrade
RUN pip install django

# Recommend directory for making your an django app.
RUN mkdir -p /app/django

WORKDIR /app/django

# If you want to start new django app, just type commands below.
#
# 1) django-admin startproject YOUR-APP-NAME /app/django
# 2) python manage.py migrate
# 3) python manage.py runserver

ENTRYPOINT [ "/bin/bash" ]
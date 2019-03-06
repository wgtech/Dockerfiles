FROM wanggilim/python-alpine:3.6.8-alpine3.9

RUN pip install --upgrade pip setuptools

# Recommend directory for making your an django app.
RUN mkdir -p /app

# DO NOT TOUCH start-django.sh
# ADD YOUR django Project on 'djangoProject' directory.
WORKDIR /app
ADD ./djangoProject /app
RUN pip install -r requirements.txt
RUN pip install -r requirements2.txt

RUN chmod +x ./*.sh

ENTRYPOINT [ "/bin/bash" ] 
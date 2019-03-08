#! /bin/bash

# migrate and runserver
for i in $(ls -d ./*/);
do
    python3 ${i%%}/manage.py makemigrations;
    python3 ${i%%}/manage.py migrate;
    python3 ${i%%}/manage.py runserver 0.0.0.0:8000;
done
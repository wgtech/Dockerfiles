#! /bin/bash

# migrate and runserver
for i in $(ls -d ./*/);
do
    python ${i%%}/manage.py migrate;
    python ${i%%}/manage.py runserver;
done
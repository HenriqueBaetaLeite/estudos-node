#!/bin/bash

echo 'teste here!'

npm i express

npm i jest -D

npm update --save

touch .gitignore

echo node_modules/ >> .gitignore

# criando variável de ambiente:

export NODE_ENV=development

echo $NODE_ENV

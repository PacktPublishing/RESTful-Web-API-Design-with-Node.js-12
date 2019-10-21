#!/bin/bash

# initialize npm project

npm init

# initialize git project (assuming Git is installed)

git init

# create all folders

mkdir scripts/ middlewares/ config/ controllers/ env/ utils/ models/ routes/ test/

# add an index.js in all folders except scripts and env

for folder in $(ls -d */)
do
	case "$folder" in
		# ignore scripts folder
		*"scripts"*) ;;
		# ignore env folder
		*"env"*) ;;
		# default case
		*) touch $folder/index.js
			echo "adding index.js to $folder"
			;;
	esac 
done

# create server entry point

touch server.js

# create a Dockerfiles

touch Dockerfile Dockerfile.test

# create a .gitignroe and .dockerignore

echo "node_modules" >> .gitignore && cp .gitignore .dockerignore

# install express, cors, basic auth and helmet

npm i express cors express-basic-auth helmet eslint

# generate basic eslint config

./node_modules/.bin/eslint --init




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
		# ignore test folder
		*"test"*) ;;
		# default case
		*) touch $folder/index.js
			echo "adding index.js to $folder"
			;;
	esac 
done

# create server entry point

echo 'import express from "express";
const server = express();
const PORT = process.ev.PORT  || 3000;

async function main() {
  // TODO: register middlewares (CORS...)
  
  // TODO: use router

  // TODO: default express error handling middleware

  server.listen(PORT, () => console.log(`listening for requests on port ${PORT}`));
}

main();
' >> server.js

# create entry point for app-level wrapping ESM library to use ES6 modules

echo "require = require("esm")(module);
module.exports = require("./server.js");
" >> index.js

# create a Dockerfiles

touch Dockerfile Dockerfile.test

# create a .gitignroe and .dockerignore

echo "node_modules" >> .gitignore && cp .gitignore .dockerignore

# install production dependencies

npm i express cors express-basic-auth helmet eslint esm

# install development dependencies

npm i -D supertest mocha

# generate basic eslint config

./node_modules/.bin/eslint --init




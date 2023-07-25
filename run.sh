#!/bin/sh

git pull;
npm i -D @sveltejs/adapter-node;
npm install dotenv;
npm install;
ORIGIN="http://192.168.0.74:3000" PORT=3000 node -r dotenv/config build
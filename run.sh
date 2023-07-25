#!/bin/sh

git config pull.ff only
killall node;

cd /home/pi/mtv_svelte;
git pull;

npm i -D @sveltejs/adapter-node;
npm install;
npm run build;
PORT=3000 nohup node build >/dev/null 2>&1 &

# ORIGIN="http://192.168.0.74:3000" PORT=3000 node -r dotenv/config build
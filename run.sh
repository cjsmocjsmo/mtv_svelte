#!/bin/sh


killall node;

cd /home/pi/mtv_svelte;
git pull;

npm i -D @sveltejs/adapter-node;
npm install;
npm run build;
PORT=3000 nohup node build >/dev/null 2>&1 &
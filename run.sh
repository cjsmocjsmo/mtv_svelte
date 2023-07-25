#!/bin/sh


killall node;

cd /home/pi/mtv_svelte;
git pull;

npm i -D @sveltejs/adapter-node;
npm install;



nohup node build >/dev/null 2>&1 &
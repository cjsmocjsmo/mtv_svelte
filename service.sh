#!/bin/sh
cd /home/pi/mtv_svelte;
node -r dotenv/config build
# ORIGIN="http://192.168.0.74:3000" PORT=3000 node -r dotenv/config build
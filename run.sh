#!/bin/sh

if [ ! -f /etc/systemd/system/mtv_svelte.service ]; then
    sudo mv /home/pi/mtv_svelte/mtv_svelte.service /etc/systemd/system/mtv_svelte.service;

else
    sudo systemctl stop mtv_svelte.service;
fi

sudo chmod 755 /etc/systemd/system/mtv_svelte.service;
sudo chown root:root /etc/systemd/system/mtv_svelte.service;

cd /home/pi/mtv_svelte;
git pull;

npm i -D @sveltejs/adapter-node;
npm install dotenv;
npm install;

sudo systemctl start mtv_svelte.service;
sudo systemctl enable mtv_svelte.service



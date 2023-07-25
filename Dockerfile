FROM node:18-alpine


RUN mkdir mtv_svelte
WORKDIR /mtv_svelte
COPY vite.config.js .
COPY svelte.config.js .
COPY package.json .
COPY package-lock.json .
COPY .prettierrc .
COPY .npmrc .
COPY .eslintrc.cjs .
COPY .eslintignore .
COPY .env .

RUN mkdir /mtv_svelte/static
WORKDIR /mtv_svelte/static
COPY static .

RUN mkdir /mtv_svelte/src
WORKDIR /mtv_svelte/src
COPY src .

# /mtv_svelte/.svelte-kit/output/server

WORKDIR /mtv_svelte
# RUN npm ci --omit=dev
RUN \
    npm install dotenv && \
    npm install

# Bundle app source

EXPOSE 3000

# CMD ["tail", "-f", "/dev/null"]
# CMD ["node", "index.js"]
CMD ["node", "-r", "dotenv/config", "PORT=3000", "ORIGIN=http://192.168.0.94:3000", "build"]
FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install express cors

COPY lib/start.js .

COPY lib/server.js .

EXPOSE 9050

CMD ["node", "start.js"]

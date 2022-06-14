FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install express cors

COPY ecs.js .

COPY server.js .

EXPOSE 9050

CMD ["node", "ecs.js"]

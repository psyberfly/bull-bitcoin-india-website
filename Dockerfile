FROM node:18

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

ENV SERVER_PORT=3583

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD npm run build && npm run start

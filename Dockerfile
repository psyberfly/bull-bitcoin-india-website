FROM node:18-slim

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm install
RUN npx next telemetry disable

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

CMD npm run start

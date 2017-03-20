FROM nodesource/node:6.1.0

RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

COPY . /home/ktuser/Deploy
RUN npm install --production

CMD ["node", "index.js"]



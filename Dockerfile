FROM nodesource/node:6.1.0

RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

COPY . /home/nodejs/app

RUN npm install --production
RUN npm install --only=dev

CMD ["node", "index.js"]



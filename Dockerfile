FROM node:10

WORKDIR /usr/src/priceandpromotionsNOcache

COPY package.json .
RUN npm install

COPY . .


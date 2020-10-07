FROM node:10

WORKDIR /usr/src/priceandpromotionsNoCache

# why the *
COPY package.json .
RUN npm install

COPY . .


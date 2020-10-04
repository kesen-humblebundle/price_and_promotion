FROM node:10

WORKDIR /usr/src/priceandpromotions

# why the *
COPY package.json .
RUN npm install

COPY . .


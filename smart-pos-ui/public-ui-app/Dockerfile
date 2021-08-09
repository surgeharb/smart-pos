FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./

RUN yarn install
COPY . ./
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]

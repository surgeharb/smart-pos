FROM node:24.22.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]

FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN yarn install --production

# Bundle app source
COPY . .

RUN echo "NODE_ENV=production" > .env

RUN yarn build

EXPOSE 1337
CMD ["yarn", "start"]

# Node version should match that of your production environment.
FROM docker.io/node:23-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

ENTRYPOINT ["yarn"]
CMD ["--help"]

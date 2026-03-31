# Node version should match that of your production environment.
FROM docker.io/node:23-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY pages ./pages

RUN yarn install
COPY components ./components
COPY interfaces ./interfaces
COPY lib ./lib
COPY styles ./styles
COPY data ./data
RUN yarn build

# Set environment variable to avoid creating source maps for production builds.
ENV GENERATE_SOURCEMAP=false

ENTRYPOINT ["yarn"]
CMD ["--help"]

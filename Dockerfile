FROM node:16

COPY . /app
WORKDIR /app

RUN yarn install --immutable
CMD [ "yarn", "run", "start" ]

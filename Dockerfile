FROM node:16.13.1-alpine

WORKDIR /usr/src/app

COPY ./package* ./
COPY ./yarn* ./

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn start

FROM postgres:11-alpine

ENV TZ Asia/Tokyo

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

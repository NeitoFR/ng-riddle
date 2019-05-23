FROM node:8.11.4

ADD ./app /app

WORKDIR /app

RUN npm i -g bower

RUN npm i && bower i --allow-root

CMD npm run prod
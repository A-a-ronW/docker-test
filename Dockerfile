FROM node:20
EXPOSE 6060
WORKDIR /usr/src/app
ENTRYPOINT ["node index.js"]
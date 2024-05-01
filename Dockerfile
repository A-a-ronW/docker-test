FROM node:20
EXPOSE 6060
WORKDIR /usr/src/app
COPY . .
CMD ["node", "index.js"]
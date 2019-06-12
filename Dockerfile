FROM node:latest

ADD package.json ./

RUN npm install

ADD pages ./pages 
ADD components ./components
ADD services ./services
ADD locales ./locales

RUN npm run build
CMD npm run start
FROM node:16.17.1-alpine

WORKDIR /work_dir

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
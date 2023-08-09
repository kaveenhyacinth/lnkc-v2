FROM node:18.17.0-alpine3.18

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY ./package.json ./

COPY . .

RUN npm install --only=production

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
FROM node:19-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:19-alpine AS production

WORKDIR /usr/src/app

USER node

EXPOSE 8080 9464

COPY package*.json ./

RUN npm ci

COPY --from=builder /usr/src/app/dist ./dist/

CMD ["npm", "run", "start:prod"]
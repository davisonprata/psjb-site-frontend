### STAGE 1: Build ###
FROM node:12-alpine AS build-step
LABEL maintainer="Vinícius Cardoso (vfcardoso3@gmail.com)"
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:alpine
LABEL maintainer="Vinícius Cardoso (vfcardoso3@gmail.com)"
COPY --from=build-step /app/dist/psjb-site-frontend /usr/share/nginx/html

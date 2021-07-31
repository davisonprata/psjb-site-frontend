### STAGE 1: Build ###
FROM node:12-alpine AS build-step
LABEL maintainer="Vinícius Cardoso (vfcardoso3@gmail.com)"

ENV WP_API_URL="https://psjb-wp.azurewebsites.net"

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
RUN sed -i 's#wpApiUrl: ""#wpApiUrl: "${WP_API_URL}/wp-json/wp/v2"#' /app/src/environments/environment.prod.ts
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:alpine
LABEL maintainer="Vinícius Cardoso (vfcardoso3@gmail.com)"
COPY --from=build-step /app/dist/psjb-site-frontend /usr/share/nginx/html

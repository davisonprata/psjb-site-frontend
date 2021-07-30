### STAGE 1: Build ###
FROM node:12-alpine AS build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/dist/psjb-site-frontend /usr/share/nginx/html

FROM node:16-alpine3.13 as builder_phase
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build 
#app/build

FROM nginx as run_phase
WORKDIR '/usr/share/ngnix/html'
COPY --from=builder_phase /app/build /usr/share/nginx/html


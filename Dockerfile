FROM node:16.10-slim

COPY . /app
WORKDIR /app

# RUN npm install
# RUN npm run build

ENTRYPOINT npx react-inject-env set && npx http-server --proxy http://localhost:8080? ./build
FROM node:20-alpine

WORKDIR /app
COPY package*.json .
#Copying package.json, package.json-lock with their dependencies
RUN npm install
COPY . .

#Exposing ports
EXPOSE 3000
#Start command
CMD ["node", "index.js"]
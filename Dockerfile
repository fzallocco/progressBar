FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
#Copying package.json, package.json-lock with their dependencies
RUN npm install
COPY . .

#Exposing ports
EXPOSE 3000
#Start command
CMD ["npm", "start"]
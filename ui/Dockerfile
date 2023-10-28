FROM node:17-alpine


#Specify working directory
WORKDIR /app

COPY package.json .


#install all dependencies
RUN npm install

##copy all files to the docker working dir
COPY . .

#choose the port to export
EXPOSE 5173

#run the app
CMD [ "npm", "run", "dev" ]


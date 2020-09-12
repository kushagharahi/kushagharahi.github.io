#base image, 5mb!!
FROM 8.7.0-wheezy

#update package information
RUN apk update
#install nodejs for npm 
RUN apk add nodejs
#install python for http.server
RUN apk add python

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only-production

# Bundle app source
COPY . .

#run prod build
RUN npm run prod-build

RUN python -m SimpleHTTPServer 8080 dist/
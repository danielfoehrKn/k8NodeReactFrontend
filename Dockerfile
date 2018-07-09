# from https://codeburst.io/dockerizing-a-nodejs-application-in-2017-f6ae070ded25
#Step 1.
FROM keymetrics/pm2:latest-alpine

#Step 2
LABEL version="1.0"
LABEL description="This is Test Docker Image"
LABEL maintainer = "Daniel Föhr (daniel.foehr@sap.com)"

#Step 3.
RUN mkdir -p /usr/src/reactFrontend
WORKDIR /usr/src/reactFrontend

#Step 4.
COPY ["package.json", "./"]
COPY ["pm2.json", "./"]

#Step 6..
# RUN npm install pm2 -> already in image

ENV NPM_CONFIG_LOGLEVEL warn

#Step 7
RUN cd /usr/src/reactFrontend && npm install --production

# Show current folder structure in logs
# RUN ls -al -R

#Step 8 - copy everything from this directory (still look for .dockerignore) into workindirectory of the image -> notice the space between the dots!
COPY . .

#Step 9.
EXPOSE 8080

#Step 10.
CMD [ "pm2-runtime", "start", "pm2.json" ]
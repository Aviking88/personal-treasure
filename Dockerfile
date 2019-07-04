# base image
FROM node:12.2.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list
RUN apt-get update && apt-get install -yq google-chrome-stable
RUN apt-get install build-essential
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.1.0 --unsafe

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0

#To build docker image:
    # docker build personal-treasure:dev .
#To run image hit following command,
# docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm personal-treasure:dev
# Link: https://mherman.org/blog/dockerizing-an-angular-app/

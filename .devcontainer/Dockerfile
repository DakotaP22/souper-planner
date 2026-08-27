# Use the official Node.js image as the base image
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /angular-22

# Install and setup git
RUN apk add --no-cache git

RUN git config --global user.name "DakotaP22" && \
    git config --global user.email "peased22@gmail.com" && \
    git config --global credential.helper store


# Install Angular
RUN npm install -g @angular/cli@22
# Dockerfile.alpine
# FROM daocloud.io/node:7
# FROM node:latest
FROM hub.c.163.com/library/node:7.10.1

MAINTAINER Charles<mrcharleshu@gmail.com>
LABEL Descripttion="This image is build for web"

# Create app directory and bundle app source
RUN mkdir -p /opt/app/node-docker
COPY .  /opt/app/node-docker
WORKDIR /opt/app/node-docker

ENV LANG C.UTF-8
ENV TZ=Asia/Shanghai

# Expose port
EXPOSE 3000

CMD [ "npm", "start" ]

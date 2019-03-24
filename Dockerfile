# Dockerfile.alpine
# Don't use lastest version
FROM node:11.6.0

MAINTAINER Charles<mrcharleshu@gmail.com>
LABEL Descripttion="This image is build for testing"

# Create app directory and bundle app source
RUN mkdir -p /opt/express-web
COPY .  /opt/express-web
WORKDIR /opt/express-web

ENV LANG C.UTF-8
ENV TZ=Asia/Shanghai

# Expose port
EXPOSE 3000

CMD [ "npm", "start" ]

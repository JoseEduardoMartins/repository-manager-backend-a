FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash git

RUN touch /home/eduardo/.bashrc | echo "PS1='\w\$ '" >> /home/eduardo/.bashrc

RUN npm i -g @nestjs/cli@7.4.1

USER eduardo

WORKDIR /home/eduardo/nest
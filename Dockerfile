FROM node:8.9
MAINTAINER DreamerKing
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /es-server
COPY packages/server /es-server
RUN  npm i --production  
EXPOSE 8080
CMD ["npm", "run", "prod"]

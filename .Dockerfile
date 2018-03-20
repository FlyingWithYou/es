FROM node:8.9
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install -g pm2
WORKDIR /es-server
COPY packages/server /es-server
RUN cd /es-server  && npm i --production
EXPOSE 3000 8888
CMD ["npm", "run", "prod"]
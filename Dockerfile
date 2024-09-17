FROM node:20.17

WORKDIR /cookme
COPY . /cookme/
RUN npm install

EXPOSE 3000
CMD ["npm","start"]

#docker build -t cookme-back .
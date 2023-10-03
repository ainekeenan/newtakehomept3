FROM node as ui-build
WORKDIR /usr/app/animals/
COPY package*.json ./
RUN npm install
COPY src/ ./src
COPY public/ ./public
RUN npm run build

FROM node as server-build
WORKDIR /usr/app/
COPY --from=ui-build /usr/app/animals/build ./animals/build
WORKDIR /usr/app/api

COPY package*.json ./
RUN npm install

COPY app.js ./
COPY api/package.json ./api/
RUN cd api && npm install
COPY api ./api/

EXPOSE 3000

CMD ["npm", "start"]
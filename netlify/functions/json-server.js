// netlify/functions/json-server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    server.listen(3000, () => {
      resolve({
        statusCode: 200,
        body: JSON.stringify({ message: 'JSON Server is running' }),
      });
    });
  });
};
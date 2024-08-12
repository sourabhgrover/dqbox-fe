// // netlify/functions/json-server.js
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);

// module.exports.handler = async (event, context) => {
//   return new Promise((resolve, reject) => {
//     server.listen(3000, () => {
//       resolve({
//         statusCode: 200,
//         body: JSON.stringify({ message: 'JSON Server is running' }),
//       });
//     });
//   });
// };

// netlify/functions/json-server.js
// const fs = require('fs');
// const path = require('path');

// exports.handler = async (event, context) => {
//   const filePath = path.resolve(__dirname, '../../db.json');
//   const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

//   return {
//     statusCode: 200,
//     body: JSON.stringify(jsonData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
// };

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Adjust the path as needed
  const filePath = path.resolve(__dirname, '../../db.json'); 
  let jsonData;

  try {
    jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'File not found' }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to read JSON data' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(jsonData),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
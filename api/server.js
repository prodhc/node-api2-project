// implement your server here
// require your posts router and connect it here
const express = require('express');

const userRouter = require('./posts/posts-router');

const server = express();

server.use(express.json()); // how to parse JSON
server.use('/api/posts', userRouter);

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Posts API</h2>
    <p>Made by your boi Secoya Wood</p>
  `);
});

module.exports = server;

// require your server and launch it here
const server = require('./api/server'); // commonjs

server.listen(6000, () => {
  console.log('Server Running on http://localhost:6000');
});
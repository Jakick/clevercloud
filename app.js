const http = require('https');

//const hostname = 'app-4ff09191-a8ff-4dbc-84d0-f8dcb982d186.cleverapps.io';
const hostname = '0.0.0.0';
const port = 8080;
console.log('<script>alert(1);</script>');

const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Hello World');
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
});

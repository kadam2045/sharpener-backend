const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server started sucessfully", req);
  res.end("shubham kadam  ");
});

server.listen(3000);

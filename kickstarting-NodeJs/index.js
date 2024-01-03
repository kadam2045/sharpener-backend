const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/home") {
    res.write("welcome to home");
    return res.end();
  }
  console.log("server started sucessfully", req.url, req.method);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>my page</title></head>");
  res.write("<body><h2>Welcome to my Nodejs project</h2></body>");
  res.write("</html>");

  res.end();
});

server.listen(3000);

const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;
  if (url == "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }

      console.log("data>>>>>>>>>>>", data);

      res.write("<html>");
      res.write("<head><title>my page</title></head>");

      res.write(
        "<body> <form  action='/message' method='POST'><input type='text' name='message'></input><button type='submit'>send</button></from></body>"
      );
      res.write("</html>");
      return res.end();
    });
  }

  if (url === "/message" && method == "post") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunkk>>>>>>>", chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log("parseBody>>>>>", parseBody);
      const gg = parseBody.split("=")[1];
      console.log("gg>>>>>>>>>>.", gg);
      fs.writeFile("message.txt", gg, (err) => {
        if (err) {
          console.log(err);
        }
        res.setHeader("Location", "/");
        res.statusCode = "202";
        return res.end();
      });
    });
  }

  console.log("server started sucessfully", req.url, req.method);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>my page</title></head>");
  res.write("<body><h2>Welcome to my Nodejs project</h2></body>");
  res.write("</html>");

  res.end();
}

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   text: " just random text",
// };

exports.handle = requestHandler;
exports.text = "just random text";

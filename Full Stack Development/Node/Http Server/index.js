const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const log = `${Date.now()}: ${req.url} New Req Received\n`;

  const myUrl = url.parse(req.url, true);

  console.log("Url: ", myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home");
        break;

      case "/about":
        const myName = myUrl.query.myname;
        res.end(`My Name is ${myName}`);
        break;

      case "/contact":
        res.end("nimitpatelnp@gmail.com");
        break;

      default:
        res.end("Hello ");
        break;
    }
  });
});

myServer.listen(8000, () =>
  console.log("Server started: http://localhost:8000/")
);

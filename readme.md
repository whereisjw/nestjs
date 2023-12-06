# nodejs 세팅

```
const http = require("http");
const url = require("url");

const host = "localhost"; // loop back (서버를 실행한 컴퓨터 127.0.0.1)
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>home page</h1>");
  } else if (path === "/post") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>post page</h1>");
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>hello world</h1>");
});
server.listen(port, host, () => {
  console.log("http://localhost:3000 실행중");
});

```

# express로 rest api 구현하기

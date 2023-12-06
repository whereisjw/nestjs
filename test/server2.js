const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>홈페이지</h1>");
});

app.get("/post", (req, res) => {
  res.send("<h1>포스트 페이지</h1>");
});

app.get("/user", (req, res) => {
  res.send("<h1>유저 페이지</h1>");
});

app.use(() => {
  res.status(404).send("<h1>낫파운드</h1>");
});

app.listen(3001, () => {
  console.log("http://localhost:3001 서버러닝");
});

/* app.get();
app.post();
app.put();
app.delete();
 */

const express = require("express");
const bodyParser = require("body-parser");

const PORT_NUM = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("<h1>Connected</h1>");
});

app.listen(PORT_NUM, () => {
  console.log(`Listening on port ${PORT_NUM}...`);
});

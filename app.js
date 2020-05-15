// Imports
const express = require("express");
const bodyParser = require("body-parser");

const listRouter = require("./routes/list-routes");

const PORT_NUM = 3000;

// Setup
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(listRouter);

app.listen(PORT_NUM, () => {
  console.log(`Listening on port ${PORT_NUM}...`);
});

// Imports
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const listRouter = require("./routes/list-routes");

const PORT_NUM = 3000;

// Setup
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(listRouter);

// Invalid route
app.use("/", (req, res, next) => {
  res.send("<h1>Page not found...</h1>");
});

app.listen(PORT_NUM, () => {
  console.log(`Listening on port ${PORT_NUM}...`);
});

const path = require("path");
const fs = require("fs");

const pathToFile = path.join(__dirname, "..", "data", "books.json");

exports.getList = (req, res, next) => {
  fs.readFile(pathToFile, (err, fileContent) => {
    if (!err) {
      const data = JSON.parse(fileContent);
      console.log(data);
      return res.render("index", {
        pageTitle: "Boka",
        bookList: data,
      });
    }
  });
};

exports.getAddBook = (req, res, next) => {
  res.render("add-book", { pageTitle: "Boka - Add Book" });
};

exports.postAddBook = (req, res, next) => {
  fs.readFile(pathToFile, (err, fileContent) => {
    if (!err) {
      const data = JSON.parse(fileContent);
      req.body.id = Math.random();
      data.push(req.body);
      fs.writeFile(pathToFile, JSON.stringify(data), (err) => {
        if (!err) {
          res.redirect("/");
        }
      });
    }
  });
};

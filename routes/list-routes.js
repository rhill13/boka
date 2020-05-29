const express = require("express");

const router = express.Router();

const listController = require("../controllers/list-controller");

router.get("/", listController.getList);

router.get("/add-book", listController.getAddBook);

router.post("/add-book", listController.postAddBook);

module.exports = router;

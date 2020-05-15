const express = require("express");

const router = express.Router();

const listController = require("../controllers/list-controller");

router.get("/", listController.getList);

module.exports = router;

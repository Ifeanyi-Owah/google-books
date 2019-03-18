const express = require("express");
const router = express.Router();
const googleController = require("../../controllers/googleController");


router.route("/").get(googleController.findAll);

module.exports = router;
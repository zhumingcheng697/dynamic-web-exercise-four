const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Create Blog Post"));

module.exports = router;

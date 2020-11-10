const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("One Blog Post"));

module.exports = router;

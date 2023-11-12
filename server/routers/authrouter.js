const express = require("express");
const validateForm = require("../controllers/validateform");
const router = express.Router();


router.post("/login", (req, res) => {
  validateForm(req, res);
});

router.post("/signup", (req, res) => {
  validateForm(req, res);
  // res.send("password was posted")
});

module.exports = router;
//create a login route to render a sign in page
const express = require("express");

const router = express.Router();

router.get("/login", function (req, res, next) {
	res.render("login");
});

module.exports = router;

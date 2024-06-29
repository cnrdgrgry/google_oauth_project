//create a login route to render a sign in page
const express = require("express");

//require in passport, the Google strategy and the SQL db
const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc");
const db = require("../db");

const router = express.Router();

router.get("/login", function (req, res, next) {
	res.render("login");
});

module.exports = router;

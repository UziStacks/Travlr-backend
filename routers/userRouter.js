const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { register, login, logout, loggedIn } = require("../controllers/index");

//register
router.post("/", async (req, res) => {
  register.handleRegister(req, res, jwt, bcrypt);
});

//login
router.post("/login", async (req, res) => {
  login.handleLogin(req, res, jwt, bcrypt);
});

//logout
router.get("/logout", (req, res) => {
  logout.handleLogout(req, res);
});

//check if logged in
router.get("/loggedin", (req, res) => {
  loggedIn.handleLoggedIn(req, res, jwt);
});

module.exports = router;

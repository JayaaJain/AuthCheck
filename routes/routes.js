const express = require("express");
const app = express();
const router = express.Router();
const secretKey = "your-secret-key";
const jwt = require("jsonwebtoken");
const middleware = require("../auth.js");

// Protected route
router.get("/protected", middleware.authenticate, (req, res) => {
  // Only authenticated and authorized requests reach this point
  res.status(200).json({ message: "Protected route", user: req.user });
});

// Login route
router.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  // Perform authentication logic, e.g., validate credentials against a database
  if (username === "john" && password === "secret") {
    const token = jwt.sign({ username: username }, secretKey);
    return res.status(200).json(token);
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;

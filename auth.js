const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key";

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  console.log("token: ", token);

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "Invalid token" });
    }
    // Store the decoded token in the request object for further use
    req.user = decoded;
    next();
  });
}

module.exports = {
  authenticate: authenticate,
};

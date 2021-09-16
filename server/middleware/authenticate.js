const jwt = require("jsonwebtoken");

const secret = "%^@#SA4494)(%^@#";
const refreshSecret = "%^@#SA04041994)(%^@";
const autenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, secret);
    req.user = decode;
    next();
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      res.status(401).json({
        message: "Token Expired",
      });
    } else {
      res.json({
        message: "Authentication failed",
      });
    }
  }
};
module.exports = autenticate;

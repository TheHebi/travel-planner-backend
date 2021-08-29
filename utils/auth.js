const jwt = require("jsonwebtoken");

const tokenAuth = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: `Auth Failed!` });
      } else {
        req.user = data;
        return next();
      }
    });
  } else {
    return res.status(403).json({ message: `Auth Failed!` });
  }
};

module.exports = tokenAuth;
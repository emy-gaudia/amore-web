const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]
  if (!token) return res.json({ error: "User not logged in!" });

  jwt.verify(token, 'sekreto-ni-emy', async (err, decoded) => {
    if (decoded) {
      return next();
    } else if (err) {
      return res.json({ error: err });
    }
  })
};

module.exports = { validateToken };
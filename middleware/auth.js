const jwt = require("jsonwebtoken");
const router = require("../routers/customerRouter");

const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ errorMessage: "Unauthorized. Please log in." });
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.id;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
};

module.exports = auth;

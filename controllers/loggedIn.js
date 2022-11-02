const handleLoggedIn = (req, res, jwt) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    jwt.verify(token, process.env.JWT_SECRET);
    res.send(true);
  } catch (err) {
    res.json(false);
  }
};

module.exports = {
  handleLoggedIn: handleLoggedIn,
};

const handleLogout = (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send("You are logged out");
};

module.exports = {
  handleLogout: handleLogout,
};

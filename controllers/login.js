const handleLogin = async (req, res, jwt, bcrypt) => {
  try {
    const { email, password } = req.body;

    //validate
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send("Logged in");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  handleLogin: handleLogin,
};

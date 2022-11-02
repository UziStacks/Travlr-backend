const router = require("express").Router();
const Customer = require("../models/customerModel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const { name } = req.body;
    // validation
    if (!name) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const newCustomer = new Customer({
      name,
    });

    const savedCustomer = await newCustomer.save();
    res.json(savedCustomer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

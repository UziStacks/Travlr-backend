const router = require("express").Router();
const Countries = require("country-state-city").Country;
const States = require("country-state-city").State;
const Cities = require("country-state-city").City;

router.get("/countries", async (req, res) => {
  try {
    const countries = Countries.getAllCountries();
    res.json(countries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//get country by name

router.get("/countries/:name", async (req, res) => {
  try {
    const firstLetter = req.params.name.charAt(0).toUpperCase();
    const country = Countries.getAllCountries().filter(
      (country) => country.name === firstLetter + req.params.name.slice(1)
    );
    if (country.length === 0) {
      res.status(404).json({ msg: "Country not found" });
    } else {
      res.json(country);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/states", async (req, res) => {
  try {
    const states = States.getAllStates();
    res.json(states);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/cities", async (req, res) => {
  try {
    const cities = Cities.getAllCities();
    res.json(cities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

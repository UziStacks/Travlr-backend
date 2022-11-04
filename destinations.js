const axios = require("axios");

const fetchLocations = async (req, res) => {
  const { data } = await axios.get(
    "https://api.schiphol.nl/public-flights/flights?app_id=0d2e2d1e&app_key=1c0d9a1c1a5a9b7c0d3b3a3c0b0a0b1c"
  );
  res.json(data);
};

module.exports = {
  fetchLocations,
};

const axios = require("axios");

async function getTv() {
  const { data } = await axios.get(
    "http://api.tvmaze.com/search/shows?q=The Biggest Loser"
  );
  return data;
}

module.exports = { getTv };

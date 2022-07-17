const axios = require("axios");

async function getTv() {
  const { data } = await axios.get(
    // biggest loser
    // "http://api.tvmaze.com/search/shows?q=The Biggest Loser"
    "http://api.tvmaze.com/shows?" // all data from api.tvmaze.com/shows
  );
  return data;
}

module.exports = { getTv };

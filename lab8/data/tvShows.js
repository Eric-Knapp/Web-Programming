const axios = require("axios");

async function getTv() {
  const { data } = await axios.get(
    // biggest loser
    // "http://api.tvmaze.com/search/shows?q=The Biggest Loser"  
    "http://api.tvmaze.com/shows?" //all data
  );
  return data;
}

module.exports = { getTv };

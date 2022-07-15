const tvShows = require("./data/tvShows");

async function Main() {
  console.log(await tvShows.getTv());
}

Main();

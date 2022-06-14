const axios = require("axios");

async function getWeather() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json"
  );
  return data;
}

async function getPeople() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json"
  );
  return data;
}

async function shouldTheyGoOutside(firstName, lastName) {
  const person = await searchByName(firstName, lastName);
  const weatherDetails = await getWeather();

  let weatherDetail = weatherDetails.find(
    (weatherDetail) => weatherDetail.zip === person.zip
  );

  if (weatherDetail.temp >= 34) {
    return firstName + " " + lastName + " should go outside!";
  } else {
    return firstName + " " + lastName + " should not go outside!";
  }
}

async function searchByName(firstName, lastName) {
  const people = await getPeople();
  //consistent error handling carried to other functions taking in firstName, lastName as arguments
  if (firstName === undefined || firstName === null) {
    throw "firstName is not defined";
  } else if (typeof firstName !== "string") {
    throw "wrong argument type for firstName";
  }
  if (lastName === undefined || lastName === null) {
    throw "lastName is not defined";
  } else if (typeof lastName !== "string") {
    throw "wrong argument type for lastName";
  }

  let person = people.find(
    (person) => person.firstName === firstName && person.lastName === lastName
  );

  if (!person) {
    throw "Name not found! Try different name";
  }
  return person;
}

module.exports = { getWeather, shouldTheyGoOutside, searchByName, getPeople };

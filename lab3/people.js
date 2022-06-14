const axios = require("axios");

async function getPeople() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json"
  );
  return data;
}

async function getPersonById(id) {
  let humans = await getPeople();
  //error handling
  if (id === undefined || id === null) {
    throw "Argument id is not defined";
  }
  if (typeof id !== "number") {
    throw "Must be a number!";
  }
  if (id >= 1000) {
    throw "ID cannot be equal to or over 1000";
  }
  if (id < 0) {
    throw "ID cannot be less than 0";
  }

  return humans[id - 1].firstName + " " + humans[id - 1].lastName;
}

async function lexIndex(index) {
  let persons = await getPeople();
  if (index === undefined || index === null) {
    throw "Index is not defined";
  }
  if (typeof index !== "number") {
    throw "IndexMust be a number!";
  }
  if (index >= 1000) {
    throw "Index cannot be equal to or over 1000";
  }
  if (index < 0) {
    throw "Index cannot be less than 0";
  }

  persons.sort((x, y) => x.lastName.localeCompare(y.lastName));

  return persons[index].firstName + " " + persons[index].lastName;
}

/*  Assignment spec desired output for firstNameMetrics():

  totalLetters: sum of all the letters in all the firstNames,
  totalVowels: sum of all the vowels in all the firstNames,
  totalConsonants: sum of all the consonants in all the firstNames,
  longestName: the longest firstName in the list,
  shortestName: the shortest firstName in the list

*/

// FirstNameMetrics() Helper functions
function numVowels(str) {
  let vow = 0;

  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
      vow++;
    }
  }
  return vow;
}

function numConsonants(str) {
  return str.split(" ").join("").length - numVowels(str);
}

async function firstNameMetrics() {
  const human = await getPeople();

  let totalLetters = 0,
    totalVowels = 0,
    totalConsonants = 0,
    longestName = 0,
    shortestName = 0;

  human.forEach(function (p) {
    if (!p.hasOwnProperty("firstName")) {
      return;
    }

    totalLetters += p.firstName.split(" ").join("").length;
    totalVowels += numVowels(p.firstName);
    totalConsonants += numConsonants(p.firstName);

    if (longestName === 0 || p.firstName.length > longestName.length) {
      longestName = p.firstName;
    }
    if (shortestName === 0 || p.firstName.length < shortestName.length) {
      shortestName = p.firstName;
    }
  });

  //store output for print within result
  let result = {
    totalLetters: totalLetters,
    totalVowels: totalVowels,
    totalConsonants: totalConsonants,
    longestName: longestName,
    shortestName: shortestName,
  };

  return result;
}

module.exports = { getPeople, getPersonById, lexIndex, firstNameMetrics };

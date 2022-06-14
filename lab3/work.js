const axios = require("axios");
const people = require("./people");
const weather = require("./weather");

async function getWork() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json"
  );
  return data;
}

async function whereDoTheyWork(firstName, lastName) {
  let worker = await getWork();
  //pulling in search by name function (function also brings in error handling)
  let names = await weather.searchByName(firstName, lastName);

  let workingMan = worker.find((workingMan) => workingMan.ssn === names.ssn);

  //print according to spec
  let nameAndJob =
    firstName +
    " " +
    lastName +
    " - " +
    workingMan.jobTitle +
    " at " +
    workingMan.company;

  // fired employee etermination
  if (worker.willBeFired) {
    nameAndJob += ". They will be fired.";
  } else {
    nameAndJob += ". They will not be fired.";
  }

  return nameAndJob;
}

async function findTheHacker(ip) {
  const w = await getWork();
  const p = await people.getPeople();
  //error handling
  if (ip === undefined || ip === null) {
    throw "ip is not defined";
  }
  if (typeof ip !== "string") {
    throw "Invalid argument type : firstName";
  }

  let worker = w.find((worker) => worker.ip === ip);

  // worker not found check, throws error
  if (!worker) {
    throw "ip not found";
  }

  let human = p.find((human) => human.ssn === human.ssn);

  return human.firstName + " " + human.lastName + " is the hacker!";
}

module.exports = { getWork, whereDoTheyWork, findTheHacker };

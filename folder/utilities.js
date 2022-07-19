deepEquality = function (obj1, obj2) {};

let uniqueElements = function (arr) {
  const count = new Set(arr).size;

  if (Array.isArray(arr) != true) {
    throw "Error - Input must be an array";
  }
  if (undefined) {
    throw "Error - cannot be undefined";
  }
  if (typeof str == null) {
    throw "Error - cannot be null";
  }

  return count;
};

let countOfEachCharacterInString = function (str) {
  if (typeof str !== "string") {
    throw "Error - Must be a String!";
  }
  if (undefined) {
    throw "Error - cannot be undefined";
  }
  if (typeof str == null) {
    throw "Error - cannot be null";
  }

  count = {};

  for (let i = 0; i < str.length; i++) {
    count[str[i]] = 1 + (count[str[i]] || 0);
  }

  return count;
};

module.exports = { deepEquality, uniqueElements, countOfEachCharacterInString };

const geometry = require("./geometry");
const utilities = require("./utilities");

console.log("testing volumeOfRectangularPrism for errors: ");
console.log(" ");
console.log(geometry.volumeOfRectangularPrism(2, 4, 6));
console.log(geometry.volumeOfRectangularPrism(2, 2, 2));
//testing a string that should not be there (should be all numbers)
try {
  console.log(geometry.volumeOfRectangularPrism(12, "arnold palmer", 54));
} catch (e) {
  console.log(e);
}

//testing 4 inputs where 3 should be
try {
  console.log(geometry.volumeOfRectangularPrism(1, 1, 1, 1));
} catch (e) {
  console.log(e);
}
// ------------------------------------------------------------------
console.log(" ");
console.log("testing surfaceAreaOfRectangularPrism: \n");
console.log(geometry.surfaceAreaOfRectangularPrism(2, 5, 7));
console.log(" ");
console.log("checking for errors: \n");

try {
  console.log(geometry.surfaceAreaOfRectangularPrism(1, 1, true));
} catch (e) {
  console.log(e);
}

try {
  console.log(geometry.surfaceAreaOfRectangularPrism(1, 1));
} catch (e) {
  console.log(e);
}

try {
  console.log(geometry.surfaceAreaOfRectangularPrism(1, -1, 1));
} catch (e) {
  console.log(e);
}

try {
  console.log(geometry.surfaceAreaOfRectangularPrism(1));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfRectangularPrism(" "));
} catch (e) {
  console.log(e);
}
//------------------------------------------------------------------
console.log("testing volumeOfSphere: \n");
console.log(geometry.volumeOfSphere(9));

console.log("testing volumeOfSphere for errors: \n");
try {
  console.log(geometry.volumeOfSphere(2, 0));
} catch (e) {
  console.log(e);
}

console.log("testing surfaceAreaOfSphere for errors: \n");
try {
  console.log(geometry.surfaceAreaOfSphere("dog"));
} catch (e) {
  console.log(e);
}

console.log(geometry.surfaceAreaOfSphere(5));
const first = { a: 2, b: 3 };
const second = { a: 2, b: 4 };
const third = { a: 2, b: 3 };
console.log(utilities.deepEquality(first, second)); // false
console.log(utilities.deepEquality(first, third)); // true

const testArr = ["a", "a", "b", "a", "b", "c"];
const testArr2 = ["a", "a", "b", "a", "b", "c", "e", "f"];
console.log(utilities.uniqueElements(testArr)); // outputs 3

const test = "Hello, the pie is in the oven";
const charMap = utilities.countOfEachCharacterInString(test);
console.log(charMap);

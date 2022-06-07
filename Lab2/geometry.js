let volumeOfRectangularPrism = function (length, width, height) {
  if (
    typeof length !== "number" ||
    typeof width !== "number" ||
    typeof height !== "number"
  ) {
    throw "Error - Argument Must be a number";
  }
  if (arguments.length !== 3) {
    throw "Error - There must be 3 parameters within the function";
  }
  if (length <= 0 || width <= 0 || height <= 0) {
    throw "Error - Positive numbers only allowed within this function";
  }
  if (arguments.length != 3) {
    throw "Error - Must be 3 values for length, width, height";
  }

  return length * width * height;
};

let surfaceAreaOfRectangularPrism = function (length, width, height) {
  if (isNaN(length)) throw "Error - Argument Must be a number";
  if (isNaN(width)) throw "Error - Argument Must be a number";
  if (isNaN(height)) throw "Error - Argument Must be a number";
  if (
    typeof length !== "number" ||
    typeof width !== "number" ||
    typeof height !== "number"
  ) {
    throw "Error - Argument Must be a number";
  }
  if (arguments.length !== 3) {
    throw "Error - There must be 3 parameters within the function";
  }
  if (length <= 0 || width <= 0 || height <= 0) {
    throw "Error - Positive numbers only allowed within this function";
  }
  if (arguments.length != 3) {
    throw "Error - Must be 3 values for length, width, height";
  }

  return length * width * 2 + 2 * (length * height) + 2 * (height * width);
};

let volumeOfSphere = function (radius) {
  if (typeof radius != "number") {
    throw "Error - Argument Must be a number";
  }
  if (isNaN(radius)) {
    throw "Error - Argument Must be a number";
  }
  if (radius <= 0) {
    throw "Error - Value must be > 0";
  }
  if (arguments.length != 1) {
    throw "Error - There must be one parameter";
  }
  if (typeof radius == null) {
    throw "Error - Input is null";
  }

  return (4 / 3) * Math.PI * (radius * radius * radius);
};

let surfaceAreaOfSphere = function (radius) {
  if (typeof radius != "number") {
    throw "Error - Argument Must be a number";
  }
  if (radius <= 0) {
    throw "Error - Value must be > 0";
  }
  if (arguments.length != 1) {
    throw "Error - There must be one parameter";
  }

  return Math.PI * 4 * radius * radius;
};

module.exports = {
  volumeOfRectangularPrism,
  surfaceAreaOfRectangularPrism,
  volumeOfSphere,
  surfaceAreaOfSphere,
};

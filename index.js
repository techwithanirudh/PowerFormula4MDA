// Copyright (c) Anirudh Sriram and  Sriram Balaji

//Math Functions
/**
 * Returns absolute value of a number.
 * @param {number} Number Number/SingleValueTable
 */
function Abs(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.abs(sourceArr[i]));
    }

    return destArr;
  } else return Math.abs(Number);
}

/**
 * Returns e raised to the power of its argument.
 * @param {number} Number Number/SingleValueTable
 */
function Exp(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.exp(sourceArr[i]));
    }

    return destArr;
  } else return Math.exp(Number);
}

/**
 * Returns the natural logarithm (base e) of its argument.
 * @param {number} Number Number/SingleValueTable
 */
function Ln(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.Ln(sourceArr[i]));
    }

    return destArr;
  } else return Math.Ln(Number);
}

/**
 * Returns the logarithm of its first argument in the base specified by its second argument (or 10 if not specified).
 * @param {number} Number Number
 * @param {number} Base Number
 */
function Log(Number, Base = 10) {
  return Math.log(Number, Base);
}

/**
 *  Returns a number raised to a power.
 * @param {number} Base - Required. Base number to raise.
 * @param {number} Exponent - Required. The exponent to which the base number is raised.
 */
function Power(Base, Exponent) {
  return Math.pow(Base, Exponent);
}

/**
 *  Returns the number when multiplied by itself, equals its argument.
 * @param {number} Number Number/SingleValueTable
 */
function Sqrt(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.sqrt(sourceArr[i]));
    }

    return destArr;
  } else return Math.sqrt(Number);
}

/*Acos, Acot, Asin, Atan, Atan2, Cos, Cot, Degrees, Pi, Radians, Sin, and Tan functions in Power Apps*/
/**
 * Returns the arccosine of a number, in radians.
 * @param {number} Number Number/SingleValueTable
 */
function Acos(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.acos(sourceArr[i]));
    }

    return destArr;
  } else return Math.acos(Number);
}

/**
 * Returns the arccotangent of a number, in radians.
 * @param {number} Number Number/SingleValueTable
 */
function Acot(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.acot(sourceArr[i]));
    }

    return destArr;
  } else return Math.acot(Number);
}

/**
 *  Returns the arcsine of a number, in radians.
 * @param {number} Number Number/SingleValueTable
 */
function Asin(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.asin(sourceArr[i]));
    }

    return destArr;
  } else return Math.asin(Number);
}

/**
 *  Returns the arctangent of a number, in radians.
 * @param {number} Number Number/SingleValueTable
 */
function Atan(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.atan(sourceArr[i]));
    }

    return destArr;
  } else return Math.atan(Number);
}

// Add a function to get the sum of numbers dynamically
// (e.g. Sum(1, 2, 3) => 6)
function Sum(num1, num2, num3) {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (a, b) {
    return a + b;
  });
}

/* TODO: Average, Min,Max */

/**
 *  Rounds down to the nearest integer.
 * @param {number} Number Number/SingleValueTable
 */
function Int(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      if (sourceArr[i] < 0) destArr.push(parseInt(sourceArr[i] - 1));
      else destArr.push(parseInt(sourceArr[i]));
    }

    return destArr;
  } else {
    if (Number < 0) return parseInt(Number - 1);
    else return parseInt(Number);
  }
}

/**
 *  Truncates the number to only the integer portion by removing any decimal portion.
 * @param {number} Number Number/SingleValueTable
 */
function Trunc(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(parseInt(sourceArr[i]));
    }

    return destArr;
  } else return parseInt(Number);
}

/**
 *  Rounds to the closest number..
 * @param {number} Number Number/SingleValueTable
 * @param {number} DecimalPlaces Number/SingleValueTable
 */
function Round(Number, DecimalPlaces) {
  if (Array.isArray(Number) && Array.isArray(DecimalPlaces)) {
    var sourceNumberArr = Number;
    var sourceDecimalPlacesArr = DecimalPlaces;
    var destArr = [];

    for (var i = 0; i < sourceNumberArr.length; i++) {
      destArr.push(
        Math.round(
          sourceNumberArr[i] * Math.pow(10, sourceDecimalPlacesArr[i])
        ) / Math.pow(10, sourceDecimalPlacesArr[i])
      );
    }

    return destArr;
  } else {
    return (
      Math.round(Number * Math.pow(10, DecimalPlaces)) /
      Math.pow(10, DecimalPlaces)
    );
  }
}

/**
 *   Rounds up to the smallest next number.
 * @param {number} Number Number/SingleValueTable
 * @param {number} DecimalPlaces Number/SingleValueTable
 */
function RoundUp(Number, DecimalPlaces) {
  if (Array.isArray(Number) && Array.isArray(DecimalPlaces)) {
    var sourceNumberArr = Number;
    var sourceDecimalPlacesArr = DecimalPlaces;
    var destArr = [];

    for (var i = 0; i < sourceNumberArr.length; i++) {
      destArr.push(
        Math.ceil(
          sourceNumberArr[i] * Math.pow(10, sourceDecimalPlacesArr[i])
        ) / Math.pow(10, sourceDecimalPlacesArr[i])
      );
    }

    return destArr;
  } else {
    return (
      Math.ceil(Number * Math.pow(10, DecimalPlaces)) /
      Math.pow(10, DecimalPlaces)
    );
  }
}

/**
 *    Rounds down to the largest previous number.
 * @param {number} Number Number/SingleValueTable
 * @param {number} DecimalPlaces Number/SingleValueTable
 */
function RoundDown(Number, DecimalPlaces) {
  if (Array.isArray(Number) && Array.isArray(DecimalPlaces)) {
    var sourceNumberArr = Number;
    var sourceDecimalPlacesArr = DecimalPlaces;
    var destArr = [];

    for (var i = 0; i < sourceNumberArr.length; i++) {
      destArr.push(
        Math.floor(
          sourceNumberArr[i] * Math.pow(10, sourceDecimalPlacesArr[i])
        ) / Math.pow(10, sourceDecimalPlacesArr[i])
      );
    }

    return destArr;
  } else {
    return (
      Math.floor(Number * Math.pow(10, DecimalPlaces)) /
      Math.pow(10, DecimalPlaces)
    );
  }
}

/**
 *  Returns the arctangent based on an (x,y) coordinate, in radians.
 * @param {X} Number Required. X-axis coordinate.
 * @param {Y} Number Required. Y-axis coordinate.
 */
function Atan2(X, Y) {
  return Math.atan2(X, Y);
}

/* Logical Functions */
// (e.g. If( Condition1, ThenResult1 [, Condition2, ThenResult2, ... [ , DefaultResult ] ] ) => Result )
function Ifs(condition, thenResult) {
  var args = Array.prototype.slice.call(arguments, 2);
  var result = thenResult;
  for (var i = 0; i < args.length; i += 2) {
    if (args[i] === condition) {
      result = args[i + 1];
      break;
    }
  }
  return result;
}

/**
 * Returns one value if a condition is true and another value if not.
 * @param {Condition} Required. Formula(s) to test for true
 * @param {ThenResult} Required. The corresponding value to return for a condition that evaluates to true.
 * @param {DefaultResult} Optional. The value to return if no condition evaluates to true.
 */
function If(Condition, ThenResult, DefaultResult) {
  return Ifs(Condition, ThenResult, DefaultResult);
}

function Switch() {
  var result;

  if (arguments.length > 0) {
    var targetValue = arguments[0];
    var argc = arguments.length - 1;
    var switchCount = Math.floor(argc / 2);
    var switchSatisfied = false;
    var hasDefaultClause = argc % 2 !== 0;
    var defaultClause = argc % 2 === 0 ? null : arguments[arguments.length - 1];

    if (switchCount) {
      for (var index = 0; index < switchCount; index++) {
        if (targetValue === arguments[index * 2 + 1]) {
          result = arguments[index * 2 + 2];
          switchSatisfied = true;
          break;
        }
      }
    }

    if (!switchSatisfied) {
      result = hasDefaultClause ? defaultClause : new Error("#N/A!");
    }
  } else {
    result = new Error("#VALUE!");
  }

  return result;
}

/* Text Functions */

/*Table and Table functions that work with Tables*/
function Table(...collection) {
  return collection;
}

// Make a function for First
function First(collection) {
  return collection[0];
}

// Make a function for FirstN
function FirstN(collection, n) {
  return collection.slice(0, n);
}

// Make a function for Last
function Last(collection) {
  return collection[collection.length - 1];
}

// Make a function for LastN
function LastN(collection, n) {
  return collection.slice(collection.length - n, collection.length);
}

function Collect(DataSource, ...Items) {
  //Check if Datasource exists
  if (DataSource == null || typeof DataSource == "undefined") {
    DataSource = Table(Items);
  } else {
    DataSource = Table(Items);
  }
}

function Set(variableName, value) {
  //Had to do this because access to DOM not allowed in Form Scripts
  var code;
  if (typeof value === "string") {
    code = "window['" + variableName + "'] ='" + value + "';";
    console.log(code);
  } else {
    code = "window['" + variableName + "'] =" + value;
    console.log(code);
  }
  eval(code);
}

function Get(name) {
  return eval("window['" + name + "']");
}

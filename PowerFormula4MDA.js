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

/**
 *  Returns the sine of a number, in radians.
 * @param {number} Number Number/SingleValueTable
 */
function Sin(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.sin(sourceArr[i]));
    }

    return destArr;
  } else return Math.sin(Number);
}

/**
 *  Returns the cosine of a number, in radians.
 * @param {number} Number Number/SingleValueTable
 */
function Cos(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.cos(sourceArr[i]));
    }

    return destArr;
  } else return Math.cos(Number);
}
/**
 * Returns the cotangent of a number, in radians.
 * @param {number} Number Number/SingleValueTable
 */
function Cot(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.cot(sourceArr[i]));
    }

    return destArr;
  } else return Math.cot(Number);
}

/**
 *  Returns the tangent of a number, in radians.
 * @param {number} Number Number/SingleValueTable
 */
function Tan(Number) {
  if (Array.isArray(Number)) {
    var sourceArr = Number;
    var destArr = [];

    for (var i = 0; i < sourceArr.length; i++) {
      destArr.push(Math.tan(sourceArr[i]));
    }

    return destArr;
  } else return Math.tan(Number);
}

// Add a function to get the sum of numbers dynamically
// (e.g. Sum(1, 2, 3) => 6)
/**
 *  Calculates the sum of a set of arguments.
 * @param {number} Number Number/SingleValueTable
 */
function Sum(num1, num2, num3) {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (a, b) {
    return a + b;
  });
}

/**
 *  /Calculates the average of its arguments.
 * @param {number} Number Number
 *
 */
function Average(num1, num2, num3) {
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum / args.length;
}

// Add a function to get the min of numbers dynamically
// (e.g. Min(1, 2, 3) => 1)
/**
 *  /Finds the minimum value.
 * @param {number} Number Number
 *
 */

function Min(num1, num2, num3) {
  var args = Array.prototype.slice.call(arguments);
  var min = args[0];
  for (var i = 0; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}

// Add a function to get the max of numbers dynamically
// (e.g. Max(1, 2, 3) => 3)
/**
 *  /Finds the maximum value.
 * @param {number} Number Number
 *
 */
function Max(num1, num2, num3) {
  var args = Array.prototype.slice.call(arguments);
  var max = args[0];
  for (var i = 0; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }
  return max;
}

/**
 *  Calculates the standard deviation of its arguments.
 * @param {number} Number Number
 *
 */
function StdevP(num1, num2, num3) {
  var args = Array.prototype.slice.call(arguments);
  var avg = Average(args);
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += Math.pow(args[i] - avg, 2);
  }
  return Math.sqrt(sum / args.length);
}

// Add a function to get the variance of numbers dynamically
// (e.g. VarP(1, 2, 3) => 1)
/**
 *  Calculates the variance of its arguments.
 *
 */
function VarP(num1, num2, num3) {
  var args = Array.prototype.slice.call(arguments);
  var avg = Average(args);
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += Math.pow(args[i] - avg, 2);
  }
  return sum / args.length;
}

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
    var argumentCount = arguments.length - 1;
    var switchCount = Math.floor(argc / 2);
    var switchSatisfied = false;
    var hasDefaultClause = argumentCount % 2 !== 0;
    var defaultClause =
      argumentCount % 2 === 0 ? null : arguments[arguments.length - 1];

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
// Add a function to concatenate two strings
// (e.g. Concat('foo', 'bar') => 'foobar')
//concatenates individual strings
/**
 *   concatenates individual strings.
 * @param {String} str1 String to concatenate
 * @param {String} str2 String to concatenate
 * @param {String} str3 String to concatenate
 *
 */

function Concatenate(str1, str2, str3) {
  var argumentCount = arguments.length - 1;
  var concStr = "";

  if (argumentCount == 0) return arguments[0];

  for (var index = 0; index < argumentCount; index++) {
    {
      concStr = concStr + arguments[index];
    }

    return concStr;
  }

  /**
   *  Converts a string of text that contains number characters to a number value. .
   * @param {String} String String to convert to a numeric value.
   */
  function Value(String) {
    return Number(String);
  }

  //TODO: Modify to work with both number and dates and with different formats
  // Add a function to convert anything to string
  // (e.g. toString(1) => '1')
  function Text(obj) {
    return String(obj);
  }

  /**
   *  Tests for a blank value or an empty string .
   * @param {String} Value – Required. Value to test for a blank value or empty string
   */
  function IsBlank(Value) {
    return Value.length === 0;
  }

  // Add a function to lowercase a string
  // (e.g. Lower('Foo') => 'foo')
  /**
   *  Converts any uppercase letters to lowercase..
   * @param {String} String String to convert to a numeric value.
   */
  function Lower(String) {
    return String.toLowerCase();
  }

  // Add a function to uppercase a string
  // (e.g. Upper('foo') => 'FOO')
  /**
   *   Converts any lowercase letters to uppercase.
   * @param {String} String String to convert to a numeric value.
   */
  function Upper(String) {
    return String.toUpperCase();
  }

  /**
   *   Converts the first letter in each word to uppercase if it's lowercase and converts any other uppercase letters to lowercase.
   * @param {String} String String to convert to a numeric value.
   */
  function Proper(String) {
    const words = String.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }

    return words.join(" ");
  }

  /**
   *  Length of a string
   * @param {String} String - Required. The string to measure.
   */
  function Len(String) {
    return String.length;
  }

  // Add a function to remove whitespace from the beginning of a string
  // (e.g. TrimLeft('  foo') => 'foo')
  function TrimLeft(str) {
    return str.replace(/^\s+/, "");
  }

  // Add a function to replace a string
  // (e.g. Replace('foo', 'bar') => 'bar')
  function Replace(str, find, replace) {
    return str.replace(find, replace);
  }

  // Add a function to remove whitespace from the end of a string
  // (e.g. TrimRight('foo  ') => 'foo')
  function TrimRight(str) {
    return str.replace(/\s+$/, "");
  }

  // Add a function to remove whitespace from the beginning and end of a string
  // (e.g. Trim('  foo  ') => 'foo')
  /**
   * Removes all spaces from the start and end of a string of text but leaves spaces between words intact.
   * @param {String} String - Required. The string of text to remove spaces from.
   */
  function TrimEnds(String) {
    return String.trim();
  }

  /**
   * Removes all spaces from a string of text except for single spaces between words.
   * @param {String} String - Required. The string of text to remove spaces from.
   */
  function Trim(String) {
    const words = String.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].trim();
    }

    return words.join(" ");
  }
}

// Add a function to split a string
// (e.g. Split('foo,bar,baz', ',') => ['foo', 'bar', 'baz'])
/**
 * Removes all spaces from a string of text except for single spaces between words.
 * @param {String} Text - Required. Text to split.
 * @param {String} Separator - Required. Separator to use in splitting the string.
 */
function Split(Text, Separator) {
  return Text.split(Separator);
}

// // Add a function to join a string
// // (e.g. Join(['foo', 'bar', 'baz'], ',') => 'foo,bar,baz')
// function Join(arr, separator) {
//   return arr.join(separator);
// }

// Add a function to check the string starts with a string
// (e.g. StartsWith('foo', 'f') => true)
/**
 * Removes all spaces from a string of text except for single spaces between words.
 * @param {String} Text – Required. The text to test.
 * @param {String} StartText – Required. The text to search for at the beginning of Text.
 */
function StartsWith(Text, StartText) {
  return Text.indexOf(StartText) === 0;
}

// Add a function to check the string ends with a string
// (e.g. EndsWith('foo', 'o') => true)
/**
 * Removes all spaces from a string of text except for single spaces between words.
 * @param {String} Text – Required. The text to test.
 * @param {String} StartText – Required. The text to search for at the end of Text.
 */
function EndsWith(Text, EndText) {
  return Text.indexOf(EndText, Text.length - EndText.length) !== -1;
}

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

/**
 *  Tests whether a table contains any record .
 * @param {Table} Table - Required. Table to test for records.
 */
function IsEmpty(Table) {
  return Table.count === 0;
}

// function Collect(DataSource, ...Items) {
//   //Check if Datasource exists
//   if (DataSource == null || typeof DataSource == "undefined") {
//     DataSource = Table(Items);
//   } else {
//     DataSource = Table(Items);
//   }
// }

function Collect(DataSource, ...Items) {
  if (typeof DataSource == "string") {
    Set(DataSource, Table(Items));
  } else {
    return new Error("DataSource must be a string");
  }
}

function SetV(variableName, value) {
  window[variableName] = value;
}

function GetV(variableName, value) {
  return window[variableName];
}

function Set(variableName, value) {
  window[variableName] = value;
}

function Get(variableName, value) {
  return window[variableName];
}

//Local variables within a Form
/**
 * Removes all spaces from a string of text except for single spaces between words.
 * @param {UpdateRecord} UpdateRecord – Required. A record that contains the name of at least one column and a value for that column. A context variable is created or updated for each column and value that you specify.
 */
function UpdateContext(UpdateRecord) {
  //var obj = JSON.parse(UpdateRecord);
  for (const key in UpdateRecord) {
    console.log(`${key}: ${UpdateRecord[key]}`);
    //Create/update a variable
    window[key] = UpdateRecord[key];
  }

  //window[variableName] = value;
}

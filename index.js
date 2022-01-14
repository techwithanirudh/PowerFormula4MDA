// Add a function to concatenate two strings
// (e.g. Concat('foo', 'bar') => 'foobar')
function Concat(str1, str2) {
	return str1 + str2;
}

// Add a function to convert string to number
// (e.g. Value('foo') => NaN)
function Value(str) {
	return Number(str);
}

// Add a function to convert anything to string
// (e.g. toString(1) => '1')
function Text(obj) {
	return String(obj);
}

// Add a function to check if a string is empty
// (e.g. IsEmpty('foo') => false)
function IsEmpty(str) {
	return str.length === 0;
}

// Add a function to expand a date
// (e.g. ExpandDate(new Date(2000, 1, 1)) => '2000-02-29')
function ExpandDate(date) {
	return (
		date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
	);
}

// Add a function to get the current date
// (e.g. GetCurrentDate() => '2000-02-29')
function GetCurrentDate() {
	return expandDate(new Date());
}

// Add a function to get the current time
// (e.g. GetCurrentTime() => '12:34:56')
function GetCurrentTime() {
	return new Date().toLocaleTimeString();
}

// Add a function to replace with 24 hour
// (e.g. ReplaceWith24Hour('12:34:56') => '12:34:56')
function ReplaceWith24Hour(time) {
	return time.replace(/(\d+):(\d+):(\d+)/, "$1:$2:$3");
}

// Add a function to replace with 12 hour
// (e.g. ReplaceWith12Hour('12:34:56') => '12:34:56')
function ReplaceWith12Hour(time) {
	return time.replace(/(\d+):(\d+):(\d+)/, "$1:$2:$3");
}

// Add a function to lowercase a string
// (e.g. Lower('Foo') => 'foo')
function Lower(str) {
	return str.toLowerCase();
}

// Add a function to uppercase a string
// (e.g. Upper('foo') => 'FOO')
function Upper(str) {
	return str.toUpperCase();
}

// Add a function to get the length of a string
// (e.g. Length('foo') => 3)
function Length(str) {
	return str.length;
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
function Trim(str) {
	return TrimRight(TrimLeft(str));
}

// Add a function to split a string
// (e.g. Split('foo,bar,baz', ',') => ['foo', 'bar', 'baz'])
function Split(str, separator) {
	return str.split(separator);
}

// Add a function to join a string
// (e.g. Join(['foo', 'bar', 'baz'], ',') => 'foo,bar,baz')
function Join(arr, separator) {
	return arr.join(separator);
}

// Add a function to check the string starts with a string
// (e.g. StartsWith('foo', 'f') => true)
function StartsWith(str, prefix) {
	return str.indexOf(prefix) === 0;
}

// Add a function to check the string ends with a string
// (e.g. EndsWith('foo', 'o') => true)
function EndsWith(str, suffix) {
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// Add a function that is multiple ifs dynamically
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

// Add a function that is multiple ifs statically
// (e.g. If( Condition1, ThenResult1 [, Condition2, ThenResult2, ... [ , DefaultResult ] ] ) => Result )
function If(condition, thenResult, elseResult) {
	return Ifs(condition, thenResult, elseResult);
}

// Add a function to check if a string is a number
// (e.g. IsNumeric('foo') => false)
function IsNumeric(str) {
	return !isNaN(str);
}

// Add a function to get local storage
// (e.g. GetLocalStorage('foo') => 'bar')
function GetLocalStorage(key) {
	return localStorage.getItem(key);
}

// Add a function to set local storage
// (e.g. SetLocalStorage('foo', 'bar') => 'bar')
function SetLocalStorage(key, value) {
	localStorage.setItem(key, value);
}

// Add a function to remove local storage
// (e.g. RemoveLocalStorage('foo') => null)
function RemoveLocalStorage(key) {
	localStorage.removeItem(key);
}

// Add a function to get session storage
// (e.g. GetSessionStorage('foo') => 'bar')
function GetSessionStorage(key) {
	return sessionStorage.getItem(key);
}

// Add a function to set session storage
// (e.g. SetSessionStorage('foo', 'bar') => 'bar')
function SetSessionStorage(key, value) {
	sessionStorage.setItem(key, value);
}

// Add a function to remove session storage
// (e.g. RemoveSessionStorage('foo') => null)
function RemoveSessionStorage(key) {
	sessionStorage.removeItem(key);
}

// Add a function to get the current url
// (e.g. GetUrl() => 'http://www.google.com')
function GetUrl() {
	return window.location.href;
}

// TODO: Rename all the functions to be more like the ones in the docs

// Add a function to get the current host
// (e.g. GetHost() => 'www.google.com')
function GetHost() {
	return window.location.host;
}

// Add a function to get the current protocol
// (e.g. GetProtocol() => 'http')
function GetProtocol() {
	return window.location.protocol;
}

// Add a function to get the current path
// (e.g. GetPath() => '/foo/bar')
function GetPath() {
	return window.location.pathname;
}

// Add a function to get the current search
// (e.g. GetSearch() => '?foo=bar')
function GetSearch() {
	return window.location.search;
}

// Add a function to get the current hash
// (e.g. GetHash() => '#foo')
function GetHash() {
	return window.location.hash;
}

// Add a function to get the current port
// (e.g. GetPort() => '80')
function GetPort() {
	return window.location.port;
}

// Add a function to get the position of text
// (e.g. GetPosition('foo', 'bar') => 3)
function GetPosition(str, find) {
	return str.indexOf(find);
}

// Add a function to get the substring of text
// (e.g. GetSubstring('foo', 1, 3) => 'oo')
function GetSubstring(str, start, end) {
	return str.substring(start, end);
}

// Add a function to get the sum of numbers dynamically
// (e.g. Sum(1, 2, 3) => 6)
function Sum(num1, num2, num3) {
	var args = Array.prototype.slice.call(arguments);
	return args.reduce(function (a, b) {
		return a + b;
	});
}

// Add a function to create a collection
// (e.g. Collect('foo', 'bar', 'baz') => ['foo', 'bar', 'baz'])
function Collect(item1, item2, item3) {
	var args = Array.prototype.slice.call(arguments);
	return args;
}

// Add a function to create a range
// (e.g. Range(1, 3) => [1, 2, 3])
function Range(start, end) {
	var arr = [];
	for (var i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}

// Add a function to create a random number
// (e.g. Rand(1, 3) => 2)
function Rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add a function to create a random string
// (e.g. RandomString(5) => '5f5f5f5f')
function RandomString(length) {
	var chars =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = "";
	for (var i = length; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)];
	}
	return result;
}

// Add a function to create a random hexadecimal color
// (e.g. RandomHexColor() => '#f5f5f5')
function RandomHexColor() {
	var chars = "0123456789abcdef";
	var result = "#";
	for (var i = 6; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)];
	}
	return result;
}

// Add a function to create a random color
// (e.g. RandomColor() => 'rgb(255, 255, 255)')
function RandomColor() {
	var r = RandomNumber(0, 255);
	var g = RandomNumber(0, 255);
	var b = RandomNumber(0, 255);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Add a function to search text
// (e.g. Find('foo', 'bar') => 'bar')
function Find(str, find) {
	return str.search(find);
}

// Add a function to get the length of text
// (e.g. Len('foo') => 3)
function Len(str) {
	return str.length;
}

// Add a function to get the character at a position
// (e.g. Char('foo', 1) => 'o')
function Char(str, pos) {
	return str.charAt(pos);
}

// Add a function to make an or operation
// (e.g. Or(true, false) => true)
function Or(bool1, bool2) {
	return bool1 || bool2;
}

// Add a function to make an and operation
// (e.g. And(true, false) => false)
function And(bool1, bool2) {
	return bool1 && bool2;
}

// Add a function to make an xor operation
// (e.g. Xor(true, false) => true)
function Xor(bool1, bool2) {
	return bool1 !== bool2;
}

// Add a function to make an not operation
// (e.g. Not(true) => false)
function Not(bool) {
	return !bool;
}

// Add a function to make an equal operation
// (e.g. Equal(1, 1) => true)
function Equal(num1, num2) {
	return num1 === num2;
}

// Add a function to make an not equal operation
// (e.g. NotEqual(1, 1) => false)
function NotEqual(num1, num2) {
	return num1 !== num2;
}

// Add a function to make an greater than operation
// (e.g. GreaterThan(1, 0) => true)
function GreaterThan(num1, num2) {
	return num1 > num2;
}

// Add a function to make an greater than or equal operation
// (e.g. GreaterThanOrEqual(1, 1) => true)
function GreaterThanOrEqual(num1, num2) {
	return num1 >= num2;
}

// Add a function to make an less than operation
// (e.g. LessThan(0, 1) => true)
function LessThan(num1, num2) {
	return num1 < num2;
}

// Add a function to make an less than or equal operation
// (e.g. LessThanOrEqual(1, 1) => true)
function LessThanOrEqual(num1, num2) {
	return num1 <= num2;
}

// Add a function to make an in operation
// (e.g. In(1, [1, 2, 3]) => true)
function In(num, arr) {
	return arr.indexOf(num) !== -1;
}

// Add a function to make an not in operation
// (e.g. NotIn(1, [1, 2, 3]) => false)
function NotIn(num, arr) {
	return arr.indexOf(num) === -1;
}

// Add a function to make an is operation
// (e.g. Is(null, null) => true)
function Is(obj1, obj2) {
	return obj1 === obj2;
}

// Add a function to make an is not operation
// (e.g. IsNot(null, null) => false)
function IsNot(obj1, obj2) {
	return obj1 !== obj2;
}

// Add a function to make an instanceof operation
// (e.g. InstanceOf(new Date(), Date) => true)
function InstanceOf(obj, type) {
	return obj instanceof type;
}

// Add a function to make an typeof operation
// (e.g. TypeOf(new Date(), 'object') => true)
function TypeOf(obj, type) {
	return typeof obj === type;
}

// Add a function to make an if error operation
// (e.g. IsError(new Error('foo'), 'foo') => 'foo')
function IsError(obj, str) {
	if (obj instanceof Error) {
		return str;
	}
}

// Add a function to make an if not error operation
// (e.g. IsNotError(new Error('foo'), 'foo') => null)
function IsNotError(obj, str) {
	if (!(obj instanceof Error)) {
		return str;
	}
}

// Add a function to check if date is today
// (e.g. IsToday(new Date()) => true)
function IsToday(date) {
	var today = new Date();
	return (
		date.getDate() === today.getDate() &&
		date.getMonth() === today.getMonth() &&
		date.getFullYear() === today.getFullYear()
	);
}

// Add a function to check if iso date time is today
// (e.g. IsToday(new Date()) => true)
function IsTodayISO(date) {
	var today = new Date();
	return (
		date.substring(0, 10) ===
		today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate()
	);
}

// Add a function to get ISO week Number
// (e.g. ISOWeekNum(new Date()) => 1)
function ISOWeekNum(date) {
	var d = new Date(date);
	d.setHours(0, 0, 0, 0);
	d.setDate(d.getDate() + 4 - (d.getDay() || 7));
	var yearStart = new Date(d.getFullYear(), 0, 1);
	var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
	return weekNo;
}

// Add a function to get current geo location
// (e.g. Location() => {lat: -34.397, lng: 150.644})
function Location() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			return {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			};
		});
	}
}

// Add a function to remove a item from a collection
// (e.g. Remove(1, [1, 2, 3]) => [2, 3])
function Remove(num, arr) {
	var index = arr.indexOf(num);
	if (index > -1) {
		arr.splice(index, 1);
	}
	return arr;
}

// Add a function to round a number
// (e.g. Round(1.2345, 2) => 1.23)
function Round(num, dec) {
	return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

// Add a function to round a number up
// (e.g. RoundUp(1.2345, 2) => 1.24)
function RoundUp(num, dec) {
	return Math.ceil(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

// Add a function to round a number down
// (e.g. RoundDown(1.2345, 2) => 1.23)
function RoundDown(num, dec) {
	return Math.floor(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

// Add a function to shuffle a collection
// (e.g. Shuffle([1, 2, 3]) => [2, 3, 1])
function Shuffle(arr) {
	var i = arr.length,
		j,
		temp;
	while (--i > 0) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

// Add Abs, Exp, Ln, Log, Pow, Sqrt, and Trunc functions
// (e.g. Abs(-1) => 1)
function Abs(num) {
	return Math.abs(num);
}

function Exp(num) {
	return Math.exp(num);
}

function Ln(num) {
	return Math.log(num);
}

function Log(num) {
	return Math.log10(num);
}

function Pow(num, num2) {
	return Math.pow(num, num2);
}

function Sqrt(num) {
	return Math.sqrt(num);
}

function Trunc(num) {
	return Math.trunc(num);
}

// Add a class called clock that has AmPm, Day, DayOfWeek, DayOfYear, Hour, Minute, Month, Second, and Year functions
// (e.g. Clock.AmPm(new Date()) => 'PM')
function Clock() {
	this.AmPm = function (date) {
		return date.getHours() >= 12 ? "PM" : "AM";
	};
	this.Day = function (date) {
		return date.getDate();
	};
	this.DayOfWeek = function (date) {
		return date.getDay();
	};
	this.DayOfYear = function (date) {
		return date.getDay();
	};
	this.Hour = function (date) {
		return date.getHours();
	};
	this.Minute = function (date) {
		return date.getMinutes();
	};
	this.Month = function (date) {
		return date.getMonth();
	};
	this.Second = function (date) {
		return date.getSeconds();
	};
	this.Year = function (date) {
		return date.getFullYear();
	};
	this.IsClock24 = function (date) {
		return date.getHours() >= 12 ? "PM" : "AM";
	};
}

// Add a class called Calender that has MonthsLong, MonthsShort, WeekdaysLong, WeekdaysShort, and WeekdaysMin functions
// (e.g. Calender.MonthsLong(new Date()) => 'January')
function Calender() {
	this.MonthsLong = function (date) {
		return date.getMonth();
	};
	this.MonthsShort = function (date) {
		return date.getMonth();
	};
	this.WeekdaysLong = function (date) {
		return date.getDay();
	};
	this.WeekdaysShort = function (date) {
		return date.getDay();
	};
	this.WeekdaysMin = function (date) {
		return date.getDay();
	};
}

// Add a function that downloads a file
// (e.g. Download('file.txt', 'Hello World') => 'Hello World')
function Download(filename, text) {
	var element = document.createElement("a");
	element.setAttribute(
		"href",
		"data:text/plain;charset=utf-8," + encodeURIComponent(text)
	);
	element.setAttribute("download", filename);

	element.style.display = "none";
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

// Add a function creates a GUID
// (e.g. Guid() => 'a0a0a0a0-a0a0-a0a0-a0a0-a0a0a0a0a0a0')
function GUID() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (c) {
			var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		}
	);
}

// Add a function that gets the Language using IETF BCP-47 language tags
// (e.g. Language() => 'en-US')
function Language() {
	return navigator.language;
}

// Add a function that gets the OS using IETF BCP-47 language tags
// (e.g. OS() => 'Windows')
function OS() {
	return navigator.platform;
}

// Add a function that Notify a message with Error, Info, Success, Warning, and None
// (e.g. Notify('Hello World', 'Error') => 'Hello World')
function Notify(message, type) {
	//   Notification types:
	//   - Error
	//   - Info
	//   - Success
	//   - Warning
	//   - None
	var notification = new Notification(message, {
		body: message,
		icon: "https://cdn.iconscout.com/icon/free/png-256/notification-8-1175416.png",
		tag: "",
		type: type,
		renotify: true,
		silent: false,
		sound: "",
		noscreen: false,
		sticky: false,
		data: "",
		dir: "auto",
		lang: "",
		vibrate: [],
	});
	notification.onclick = function () {
		window.focus();
		this.close();
	};
}

// Add a function that gets the User Agent
// (e.g. UserAgent() => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.52')
function UserAgent() {
	return navigator.userAgent;
}

// Add a function that gets the Week Number
// (e.g. WeekNum() => '1')
function WeekNum() {
	return new Date().getWeek();
}

// Add a function that gets the Year
// (e.g. Year() => '2020')
function Year() {
	return new Date().getFullYear();
}

// Add a function that gets the Month
// (e.g. Month() => 'January')
function Month() {
	return new Date().getMonth();
}

// Add a function that gets the Day
// (e.g. Day() => '1')
function Day() {
	return new Date().getDate();
}

// Add a function that truncates a string
// (e.g. Trunc('Hello World', 5) => 'Hello')
function Trunc(str, num) {
	return str.substring(0, num);
}

// Add a function that traces a message
// (e.g. Trace('Hello World') => 'Hello World')
function Trace(message) {
	console.log(message);
}

// Add a function that gets the Week Day
// (e.g. WeekDay() => 'Monday')
function WeekDay() {
	return new Date().getDay();
}

// Add a function that Translates a string
// (e.g. Translate('Hello World', 'en-US', 'es-ES') => 'Hola Mundo')
function Translate(message, from, to) {
	var url =
		"https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
		from +
		"&tl=" +
		to +
		"&dt=t&q=" +
		message;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, false);
	xhr.send();
	var response = JSON.parse(xhr.responseText);
	return response[0][0][0];
}

// Add a function that powers a number to a power
// (e.g. Power(2, 3) => 8)
function Power(num, power) {
	return Math.pow(num, power);
}

// Add a function that gets the Minimum of two numbers
// (e.g. Min(2, 3) => 2)
function Min(num1, num2) {
	return Math.min(num1, num2);
}

// Add a function that gets the Maximum of two numbers
// (e.g. Max(2, 3) => 3)
function Max(num1, num2) {
	return Math.max(num1, num2);
}

// Add a function that gets the Absolute Value of a number
// (e.g. Abs(-2) => 2)
function Abs(num) {
	return Math.abs(num);
}

// Create an indexed db wrapper
function IndexedDB(name, version) {
	this.name = name;
	this.version = version;
	this.db = null;
	this.request = window.indexedDB.open(this.name, this.version);
	this.request.onerror = function (event) {
		console.log("Error: " + event.target.errorCode);
	};
	this.request.onsuccess = function (event) {
		this.db = event.target.result;
	};
	this.request.onupgradeneeded = function (event) {
		this.db = event.target.result;
		this.db.createObjectStore(this.name, {
			keyPath: "id",
			autoIncrement: true,
		});
	};
	this.add = function (data) {
		var transaction = this.db.transaction([this.name], "readwrite");
		var objectStore = transaction.objectStore(this.name);
		var request = objectStore.add(data);
		request.onsuccess = function (event) {
			console.log("Success");
		};
		request.onerror = function (event) {
			console.log("Error: " + event.target.errorCode);
		};
	};
	this.get = function (id) {
		var transaction = this.db.transaction([this.name], "readwrite");
		var objectStore = transaction.objectStore(this.name);
		var request = objectStore.get(id);
		request.onsuccess = function (event) {
			console.log("Success");
		};
		request.onerror = function (event) {
			console.log("Error: " + event.target.errorCode);
		};
	};
	this.delete = function (id) {
		var transaction = this.db.transaction([this.name], "readwrite");
		var objectStore = transaction.objectStore(this.name);
		var request = objectStore.delete(id);
		request.onsuccess = function (event) {
			console.log("Success");
		};
		request.onerror = function (event) {
			console.log("Error: " + event.target.errorCode);
		};
	};
	this.clear = function () {
		var transaction = this.db.transaction([this.name], "readwrite");
		var objectStore = transaction.objectStore(this.name);
		var request = objectStore.clear();
		request.onsuccess = function (event) {
			console.log("Success");
		};
		request.onerror = function (event) {
			console.log("Error: " + event.target.errorCode);
		};
	};
	this.count = function () {
		var transaction = this.db.transaction([this.name], "readwrite");
		var objectStore = transaction.objectStore(this.name);
		var request = objectStore.count();
		request.onsuccess = function (event) {
			console.log("Success");
		};
		request.onerror = function (event) {
			console.log("Error: " + event.target.errorCode);
		};
	};
	this.openCursor = function () {
		var transaction = this.db.transaction([this.name], "readwrite");
		var objectStore = transaction.objectStore(this.name);
		var request = objectStore.openCursor();
		request.onsuccess = function (event) {
			console.log("Success");
		};
		request.onerror = function (event) {
			console.log("Error: " + event.target.errorCode);
		};
	};
	this.openKeyCursor = function () {
		var transaction = this.db.transaction([this.name], "readwrite");
		var objectStore = transaction.objectStore(this.name);
		var request = objectStore.openKeyCursor();
		request.onsuccess = function (event) {
			console.log("Success");
		};
		request.onerror = function (event) {
			console.log("Error: " + event.target.errorCode);
		};
	};
	this.getAll = function () {
		var transaction = this.db.transaction([this.name], "readwrite");
		var objectStore = transaction.objectStore(this.name);
		var request = objectStore.getAll();
		request.onsuccess = function (event) {
			console.log("Success");
		};
		request.onerror = function (event) {
			console.log("Error: " + event.target.errorCode);
		};
	};
	this.getAllKeys = function () {
		var transaction = this.db.transaction([this.name], "readwrite");
		var objectStore = transaction.objectStore(this.name);
		var request = objectStore.getAllKeys();
		request.onsuccess = function (event) {
			console.log("Success");
		};
		request.onerror = function (event) {
			console.log("Error: " + event.target.errorCode);
		};
	};
}

// Make a function to set a variable to a value
function SetVar(name, value) {
	window[name] = value;
}

// Make a function to get a variable's value
function GetVar(name) {
	return window[name];
}

// Make a function to delete a variable
function DeleteVar(name) {
	delete window[name];
}

// Make a function to add an event listener to an element
function AddEventListener(element, event, callback) {
	element.addEventListener(event, callback);
}

// Make a function to remove an event listener from an element
function RemoveEventListener(element, event, callback) {
	element.removeEventListener(event, callback);
}

// Make a function to calculate acceleration
function Acceleration(x, y, z) {
	return Math.sqrt(x * x + y * y + z * z);
}

// Make a function to calculate Acos
function Acos(x) {
	return Math.acos(x);
}

// Make a function to calculate Asin
function Asin(x) {
	return Math.asin(x);
}

// Make a function to calculate Atan
function Atan(x) {
	return Math.atan(x);
}

// Make a function to calculate Atan2
function Atan2(x, y) {
	return Math.atan2(x, y);
}

// Make a function to calculate Ceil
function Ceil(x) {
	return Math.ceil(x);
}

// Make a function to calculate Cos
function Cos(x) {
	return Math.cos(x);
}

// Make a function to calculate Cotan
function Cot(x) {
	return 1 / Math.tan(x);
}

//Make a function for ClearCollectt
function ClearCollect(collection) {
	collection.splice(0, collection.length);
}

// Make a function for Coalesce
function Coalesce(value, defaultValue) {
	if (value === null || value === undefined) {
		return defaultValue;
	}
	return value;
}

// Make a function for CountCollect
function CountCollect(collection) {
	return collection.length;
}

// Make a function for Color
function Color(r, g, b, a) {
	return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

// Make a function for ColorFade
function ColorFade(color, percent) {
	var r = Math.round(color.r * percent);
	var g = Math.round(color.g * percent);
	var b = Math.round(color.b * percent);
	var a = color.a;
	return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

// Make a function for ColorValue
function ColorValue(color) {
	return (
		"rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")"
	);
}

// Make a function for Compass
function Compass(x, y) {
	// Return north, south, east, west, north-east, north-west, south-east, south-west
	var angle = Atan2(y, x);
	if (angle < 0) {
		angle += 2 * Math.PI;
	}
	var compass = Math.round(angle / (Math.PI / 4));
	if (compass == 0) {
		return "north";
	}
	if (compass == 1) {
		return "north-east";
	}
	if (compass == 2) {
		return "east";
	}
	if (compass == 3) {
		return "south-east";
	}
	if (compass == 4) {
		return "south";
	}
	if (compass == 5) {
		return "south-west";
	}
	if (compass == 6) {
		return "west";
	}
	if (compass == 7) {
		return "north-west";
	}
}

// Create a function to get the current date
function Date() {
	var date = new Date();
	return date;
}

// Make a function named DateAdd
function DateAdd(date, interval, value) {
	date.setTime(date.getTime() + value * interval);
	return date;
}

// Make a function named DateDiff
function DateDiff(date1, date2, interval) {
	var diff = date2 - date1;
	return Math.floor(diff / interval);
}

// Make a function named DateTimeValue
function DateTimeValue(date) {
	return date.getTime();
}

// Make a function named DateValue
function DateValue(date) {
	return date.getDate();
}

// Make a function to EncodeUrl
function EncodeUrl(url) {
	return encodeURI(url);
}

// Make a function for First
function First(collection) {
	return collection[0];
}

// Make a function for FirstN
function FirstN(collection, n) {
	return collection.slice(0, n);
}

// Make a function named ForAll
function ForAll(collection, callback) {
	for (var i = 0; i < collection.length; i++) {
		callback(collection[i]);
	}
}

// Make a function for Hour
function Hour(date) {
	return date.getHours();
}

// Make a function for GroupBy
function GroupBy(collection, callback) {
	var result = {};
	for (var i = 0; i < collection.length; i++) {
		var key = callback(collection[i]);
		if (result[key] === undefined) {
			result[key] = [];
		}
		result[key].push(collection[i]);
	}
	return result;
}

// Make a function for HashTags
function HashTags(text) {
	var tags = text.match(/#\w+/g);
	if (tags === null) {
		return [];
	}
	return tags;
}

// Make a function for Identifiers
function Identifiers(text) {
	var identifiers = text.match(/\$\w+/g);
	if (identifiers === null) {
		return [];
	}
	return identifiers;
}

// Make a function for IfError
function IfError(value, defaultValue) {
	if (value === null || value === undefined) {
		return defaultValue;
	}
	return value;
}

// Make a function for Int
function Int(value) {
	return parseInt(value);
}

// Make a function for IsBlank
function IsBlank(value) {
	return value === null || value === undefined || value === "";
}

// Make a function for IsBlankOrError
function IsBlankOrError(value) {
	// Call is blank and error put or operation
	return IsBlank(value) || IsError(value) ? true : false;
}

// Make a function for IsMatch
function IsMatch(text, pattern) {
	return text.match(pattern) !== null;
}

// Make a function for IsType
function IsType(value, type) {
	return typeof value === type;
}

// Make a function for JSON
function JSON(value) {
	return JSON.stringify(value);
}

// Make a function for Last
function Last(collection) {
	return collection[collection.length - 1];
}

// Make a function for LastN
function LastN(collection, n) {
	return collection.slice(collection.length - n, collection.length);
}

// Make a function for Launch
function Launch(url) {
	window.open(url);
}

// Make a function for Left
function Left(text, n) {
	return text.substring(0, n);
}

// Make a function for LoadData from LocalStorage
function LoadData(key) {
	return window.localStorage.getItem(key);
}

// Make a function for SaveData to LocalStorage
function SaveData(key, value) {
	window.localStorage.setItem(key, value);
}

// Make a function for ClearData from LocalStorage
function ClearData(key) {
	window.localStorage.removeItem(key);
}

// Make a LookUp Condition like if
function LookUp(collection, key) {
	return collection[key];
}

// Make a function for Match
function Match(text, pattern) {
	return text.match(pattern);
}

// Make a function for MatchAll
function MatchAll(text, pattern) {
	return text.match(pattern);
}

// Make a function for Mid
function Mid(text, start, length) {
	return text.substring(start, start + length);
}

// Make a function for Minute
function Minute(date) {
	return date.getMinutes();
}

// Make a function for Mod
function Mod(x, y) {
	return x % y;
}

// Make a function for NewForm
function NewForm(url, data) {
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", url);
	for (var key in data) {
		var input = document.createElement("input");
		input.setAttribute("type", "hidden");
		input.setAttribute("name", key);
		input.setAttribute("value", data[key]);
		form.appendChild(input);
	}
	document.body.appendChild(form);
	form.submit();
}

// Make a function for Now
function Now() {
	return Date();
}

// Make a function for Operators
function Operators(text) {
	var operators = text.match(/[+\-*/]/g);
	if (operators === null) {
		return [];
	}
	return operators;
}

// Done until 111

// Make a function for Parent
function Parent(element) {
	return element.parentNode;
}

// Make a function for Param
function Param(url, name) {
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	var results = regex.exec(url);
	return results === null ? "" : results[1];
}

// Make a function for Pi
function Pi() {
	return Math.PI;
}

//Done till 114

// Make a function to Print the Screen
function Print() {
	window.print();
}

// Make a function for Proper
function Proper(text) {
	return text.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

// Make a function for Radians
function Radians(degrees) {
	return (degrees * Math.PI) / 180;
}

// Make a function for ReadNFC

// Make a function for RecordInfo

// Make a function for Refresh
function Refresh() {
	window.location.reload();
}

// make a function for Relate
function Relate(collection, key, value) {
	var result = [];
	for (var i = 0; i < collection.length; i++) {
		if (collection[i][key] === value) {
			result.push(collection[i]);
		}
	}
	return result;
}

// Make a function for Remove
function Remove(collection, key, value) {
	var result = [];
	for (var i = 0; i < collection.length; i++) {
		if (collection[i][key] !== value) {
			result.push(collection[i]);
		}
	}
	return result;
}

// Make a function for Replace item in collection
function Replace(collection, key, value, newValue) {
	var result = [];
	for (var i = 0; i < collection.length; i++) {
		if (collection[i][key] === value) {
			collection[i][key] = newValue;
		}
		result.push(collection[i]);
	}
	return result;
}

// Make a function for RenameColumns
function RenameColumns(collection, oldName, newName) {
	var result = [];
	for (var i = 0; i < collection.length; i++) {
		var temp = {};
		temp[newName] = collection[i][oldName];
		result.push(temp);
	}
	return result;
}

// Made until 129
// Add a function to get the average of numbers dynamically
// (e.g. Average(1, 2, 3) => 2)
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

// Add a function to get the standard deviation of numbers dynamically
// (e.g. StdDev(1, 2, 3) => 1)
function StdDev(num1, num2, num3) {
	var args = Array.prototype.slice.call(arguments);
	var avg = Average(args);
	var sum = 0;
	for (var i = 0; i < args.length; i++) {
		sum += Math.pow(args[i] - avg, 2);
	}
	return Math.sqrt(sum / args.length);
}

// Add a function to get the variance of numbers dynamically
// (e.g. Variance(1, 2, 3) => 1)
function Variance(num1, num2, num3) {
	var args = Array.prototype.slice.call(arguments);
	var avg = Average(args);
	var sum = 0;
	for (var i = 0; i < args.length; i++) {
		sum += Math.pow(args[i] - avg, 2);
	}
	return sum / args.length;
}

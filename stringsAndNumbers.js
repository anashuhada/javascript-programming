// strings
let s = "Welcome";
// let s = new String();

// charAt()
console.log(s.charAt(3)); // index

// concat()
console.log(s.concat(" to JavaScript Programming.")); // Welcome to JavaScript Programming.
console.log(s.concat(" to JavaScript ").concat("Programming."));

// replace()
s = "Welcome to JavaScript."
console.log(s.replace("JavaScript", "Python"));

// substring()
s = "Welcome";
console.log(s.substring(0, 3)); // Wel
console.log(s.substring(2, 5)); // lco

// toLowerCase() and toUpperCase()
s = "WELcome";
console.log(s.toLowerCase()); // welcome
console.log(s.toUpperCase()); // WELCOME

// split() - returns in array
s = "Welcome to JavaScript."
// create array variable
let arr = s.split(' ');
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// trim() - remove whitespaces
s = "   welcome ";
console.log(s.trim());

// numbers
// let x = 100;
// let x = new Number(100);

let x = 102; // integer 
let y = 107.3; // decimal
let z = 10e2; // exponential
console.log(x, y, z);

// isInteger() - returns true or false
x = 10;
y = 1.8;
z = "x";
console.log(Number.isInteger(x)); // true
console.log(Number.isInteger(y)); // false
console.log(Number.isInteger(z)); // false

// parseInt() - converts a string into number
s = "12345"; // must be in number, not words
console.log(typeof(s));
console.log(typeof(Number.parseInt(s)));

// parseFloat()
s = "12345.6789"; // must be in number, not words
console.log(typeof(s));
console.log(typeof(Number.parseFloat(s)));

// toString() - converts a number into string
// let n = 1234;
let n = 1234.567;
console.log(typeof(n)); // number
console.log(typeof(Number.toString(n))); // string
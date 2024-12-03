var x; // declaration
x = 10; // initialization

var x = 10; // single statement with declaration & initialization

var x = 100, y = 200; // single statement with multiple variables

document.write(x);
console.log(x);

// multiple line
let x; // declaration
x = "Welcome"; // initialization
console.log(x);

let x = "Welcome";  // single statement with declaration & initialization
console.log(x);

// multiple variables in single line
let x = "Welcome", y = 100;
console.log(x);
console.log(y);

// difference between var and let
console.log(x);
// var x = 100;
let x = 100;
console.log(x);

// const: value cannot be changed
const x = 100;
console.log(x);
x = 500; // incorrect because x is using const
console.log(x);

// data types
let x = 100; 
console.log(typeof(x)); // number

let price = 100.99; 
console.log(typeof(price)); // number

let studentName = "John";
console.log(typeof(studentName)); // string

let flag = false;
console.log(typeof(flag)); // boolean

let status = null;
console.log(typeof(status)); // object

// let value;
let value = undefined;
console.log(typeof(value)); // undefined
let x = 10, y = 20;

// arithmetic operators + - * / % ** ++ -- 
console.log(x + y); // 30
console.log(y - x); // 10
console.log(x * y); // 200
console.log(y / x); // 2
console.log(y % x); // 0
console.log(5 ** 2); // 25

// x = x + 1;
// x++; // post increment
++x; // pre increment
console.log(x); // 11

y = 20;
y = y - 1;
// y--; // post increment
--y; // pre increment
console.log(y); // 19

x = 100;
y = 50;
// console.log(x); // 100

// assignment operators
// x = x + y;
x += y;
console.log(x); // 150
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);

// relational/comparison operators
// boolean always returns a value true or false
// < > <= => !=
x = 10;
y = 20;
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true
console.log(x != y); // true

// ternary operator
// ?
console.log(x < y ? x : y); // 10
console.log(y > x ? y : x); // 20

// logical operators; and or not
// && || !
let a = true;
let b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

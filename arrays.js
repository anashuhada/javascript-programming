// first notation
// let cars = ["Saab", "Volvo", "BMW"];

// second notation
let cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);

// accessing individual element
console.log(cars[2]); 

// change the value using index
cars[0] = "Opel";
console.log(cars);

// different data types in the same array is allowed
let myArray = [100, "Welcome", 10.15, true];
console.log(myArray);

// create objects in an array
let person1 = {
    name: "John",
    age: 30
};

let person2 = {
    name: "David",
    age: 40
};

let myArray1 = [person1, person2];
console.log(myArray1);
console.log(myArray1[0]);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // 4

// looping elements from an array
for(let i = 0; i <= fruits.length-1; i++) {
    console.log(fruits[i]);
}

// looping elements from array using for/of loop
for(f of fruits) {
    console.log(f);
}

// recognise an array using typeof
console.log(typeof(fruits)); // object
console.log(Array.isArray(fruits)); // return true/false
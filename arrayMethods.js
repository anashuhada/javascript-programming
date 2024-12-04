let fruits = ["Banana", "Orange", "Apple", "Mango"];

// toString() and join() 
// convert an array to a string by separating the values using comma
console.log(fruits.toString()); 
console.log(fruits.join(", ")); // join can separate the values by specifying any kind of special character

// pop() - remove the last element
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());
console.log(fruits);

// push() - add new element at the end of the array 
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi")); // push() add new element at the end of the array and return the length of the array
console.log(fruits);

// shift() - remove the first array element and will shift all other elements to the lower index
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift()); // return the shifted value
console.log(fruits);

// unshift() - add the first array element and will shift all other elements to the higher index
fruits = ["Banana", "Orange", "Mango"];
console.log(fruits.unshift("Lemon")); // return the value of the array length
console.log(fruits);

// delete elements from array
fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[1];
console.log(fruits);
console.log(fruits.length);

// concat() - join/merge 2 or more arrays
let arr1 = [10, 20];
let arr2 = ["A", "B", "C"];
console.log(arr1.concat(arr2)); // [ 10, 20, 'A', 'B', 'C' ]

let arr3 = ["X", "Y", "Z"];
console.log(arr1.concat(arr2, arr3)); // [10,  20,  'A', 'B', 'C', 'X', 'Y', 'Z']

// slice
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1)); // return the rest of the element from the first location; create new array
console.log(fruits.slice(3));

// sort() - sort elements from the array in ascending order
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Lemon', 'Mango', 'Orange' ]

let nums = [100, 500, 200, 800, 300]; 
console.log(nums.sort()); // [ 100, 200, 300, 500, 800 ]

// reverse()
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("Original array elements: " + fruits); // Banana,Orange,Lemon,Apple,Mango
fruits.reverse();
console.log("Original array elements: " + fruits); // Mango,Apple,Lemon,Orange,Banana
// example 1
function add(a, b) {
    console.log(a + b);
}

add(100, 200);

// example 2
function add(a, b) {
    return a + b;
}

let result = add(10, 50);
console.log(result);

// example 3
function greetings() {
    console.log("Hi! Good morning.");
}

greetings();

function greetings() {
   return "Hi! Good morning.";
}

console.log(greetings());
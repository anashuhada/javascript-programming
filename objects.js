let person = {
    firstName: "John",
    lastName: "Kenedy",
    age: 50,
    weight: 60
}

// access object properties
console.log(person["firstName"]);
console.log(person.lastName);

// add new property into the existing object
person["height"] = 170; // person.height = 170;
console.log(person["height"]);
console.log(person.height);

// update existing property
person["weight"] = 65;
console.log(person.weight);

// remove the project from the object
delete person["age"];
console.log(person["age"]); // undefined

console.log("***** Looping object *****")
// for in loop
for(let x in person) {
    // console.log(x); // read only the property names
    // console.log(person[x]); // read only the property values
    console.log(x + ": " + person[x]) // read both property names and values
}

console.log("***** Employee *****")
let employee = {
    empName: "Scott",
    empId: 123,
    job: "Engineer",
    basicSalary: 50000,
    bonus: function() {
        return ((this.basicSalary) * 10/100);
    },
    actualSalary: function() {
        return (this.basicSalary + this.bonus());
    }
}

console.log(employee["empName"]);
console.log(employee.bonus()); // add () to invoke the function
console.log(employee.actualSalary());
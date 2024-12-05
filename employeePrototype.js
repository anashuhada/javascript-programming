class Employee {

    constructor(employeeId, name) {
        this.id = employeeId; // this keyword refers to the current object in a method or constructor
        this.name = name;
        // this.salary = salary; // if don't want to share the same salary
    }
}

Employee.prototype.salary = 5000; // share across all instances

// display is the name of the function
Employee.prototype.display = function() {
                                console.log(this.id, this.name, this.salary);
                            }

empObj1 = new Employee(101, "Scott"); // pass the value from parameter in constructor into Employee class object
// console.log(empObj1.id, empObj1.name, empObj1.salary);
empObj1.display();

empObj2 = new Employee(102, "Davis"); 
empObj2.display(); // inherit from prototype
// console.log(empObj2.id, empObj2.name, empObj2.salary);
empObj2.salary = 7000; // override the prototype
empObj2.display();
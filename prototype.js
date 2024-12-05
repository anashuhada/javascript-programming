function student() {
    this.name = "John";
    this.gender = "Male";
}

// prototype - add later after function/class
student.prototype.age = 40;

stud1 = new student();
console.log(stud1.name);
console.log(stud1.gender);
stud1.age = 35; 
console.log(stud1.age);

stud2 = new student();
console.log(stud2.name, stud2.gender, stud2.age);
class Student {

    // pass the parameter value into the Student constructor
    constructor(id, name, grade) {
        // this keyword belongs to class
        // this.id = 101;
        // this.name = "John";
        // this.grade = "A";

        this.id = id; // id belongs to the method
        this.name = name;
        this.grade = grade;
    }

    // setDetails(id, name, grade) {
    //     // this keyword belongs to class
    //     // this.id = 101;
    //     // this.name = "John";
    //     // this.grade = "A";

    //     this.id = id; // id belongs to the method
    //     this.name = name;
    //     this.grade = grade;
    // }

    display() {
        console.log(this.id, this.name, this.grade);
    }
}

// every object is independent
let student = new Student(102, "David", "B");
// student.setDetails(102, "David", "B");
student.display();

let student1 = new Student(103, "Davis", "A");
student1.display();

let student2 = new Student(104, "Smith", "B");
student2.display();

let student3 = new Student(105, "Scott", "C");
student3.display();
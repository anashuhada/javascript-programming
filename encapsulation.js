class Student {

    constructor() {
        let name, marks;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }

    setMarks(marks) {
        this.marks = marks;
    }
}

let stud = new Student();
stud.setName("John");
stud.setMarks(90);
console.log(stud.getName(), stud.getMarks());
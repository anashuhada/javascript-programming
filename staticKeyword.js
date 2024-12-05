class Test {

    static a = 10; // static variable
    b = 20; // non-static variable
     
    static method1() {
        console.log("This is method1 static method.");
    }

    method2() {
        console.log("This is method2 non-static method.");
    }

}

// static used to save some memory
// static variables and methods can be directly called by using class name
console.log(Test.a); // 10
Test.a = 100;
console.log(Test.a); // 100
// console.log(Test.b); // undefined

Test.method1(); // This is method1 static method.
// Test.method2(); // Test.method2 is not a function - error, incorrect

// we can access non-static variables and methods using object
let t = new Test();
console.log(t.b);
t.method2();
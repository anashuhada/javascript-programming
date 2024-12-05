class A {
    a = 100;

    display() {
        console.log(this.a); // this representing the class
    }
}

class B extends A {
    b = 300;

    show() {
        console.log(this.b);
    }
}

bObj = new B();
bObj.display();
bObj.show();
// all implementations already have in parent class, we modify the implementation of the method within the child class

class Bank {
    roi() {
        return 0;
    }
}

class AXIS extends Bank {
    roi() {
        return 10.5; // overriding from the parent class
    }
}

class SBI extends Bank {
    roi() {
        return 12.5;
    }
}

sbi = new SBI();
console.log(sbi.roi());

ax = new AXIS();
console.log(ax.roi());
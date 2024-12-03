// print 1...10
let i = 100;
do {
    // this statement will execute at least once even not satisfy the condition
    console.log(i);
    i++;
} while(i <= 10);

// print 10, 9, 8...1
let x = 10;
do {
    console.log(x);
    x--;
} while(x > 0);
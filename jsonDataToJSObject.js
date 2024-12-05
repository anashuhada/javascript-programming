// convert json data into js object
let text = '{ "employee" : [' + 
    ' { "firstname" : "John","lastname": "Doe"},' + 
    ' { "firstname" : "Anna", "lastname": "Smith"},' +
    ' { "firstname" : "Peter", "lastname": "Jones"} ]}';

let obj = JSON.parse(text);
console.log(obj.employee[1].firstname + " " + obj.employee[1].lastname); // Anna Smith
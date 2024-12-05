data = '{"name": "mkyong", "age": 30, "address": {"streetAddress": "88 8nd Street", "city": "New York"}, "phoneNumber": [{"type": "home", "number": "111 111-1111"}, {"type": "fax", "number": "222"}]}';

let obj = JSON.parse(data); // JSON-formatted string as input and parses it into a JavaScript object or array
console.log(obj["name"]);
console.log(obj.name);

console.log(obj["address"].streetAddress);
console.log(obj.address.streetAddress);

console.log(obj.phoneNumber[0].type + " " + obj.phoneNumber[0].number);
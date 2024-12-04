let dt = new Date();
console.log(dt);
console.log(dt.getDate()); // 1-31
console.log(dt.getMonth() + 1); // 0-11
console.log(dt.getFullYear()); // returns current year
console.log(dt.getDate() + " " + dt.getMonth() + " " + dt.getFullYear());
console.log(dt.getHours()); // 0-23
console.log(dt.getMinutes()); // 0-59
console.log(dt.getSeconds()); // 0-59
console.log(dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());
var a = Number(undefined); // NaN
console.log(a);
a = Number(null); // null
console.log(a); 


var x = 1;
var y = 2;
var z = 3;

console.log(x < y < z); // true
// < has left to right associativity
// 1. x < y < z
// 2. true < z
// 3. 1 < z
// 4. true

console.log(3 == "3"); // true
console.log(false == 0); // true

console.log(3 === "3"); // false
console.log(3 !== "3"); // true


console.log(undefined || "Nimit"); // Nimit
console.log("hii" || "Hello"); // hii
console.log(0 || 1); // 1






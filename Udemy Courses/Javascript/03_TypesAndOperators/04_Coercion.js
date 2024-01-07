// String Coercion

var x;
var y;

x = 3;
y = "3";
console.log("1]:", x + y); // "33"

console.log("2]:", x - y); // 0

x = 0;
y = 23;

if (x) {
  console.log(x);
} // The code inside this block will not run since the value of x is 0(Falsy)

if (y) {
  console.log(y);
} // The code inside this block will run since the value of y is 23 (Truthy)

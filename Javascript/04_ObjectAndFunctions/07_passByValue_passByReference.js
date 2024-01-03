
// Pass by value
console.log("Pass by value: ");
var a = 37;
var b;

b = a;
console.log("Before changes: ");
console.log("a: ",a);
console.log("b: ",b);
a = 19;
console.log("After changes: ");
console.log("a: ",a);
console.log("b: ",b);


// Pass by Reference
console.log("Pass by reference: ");
var x = {name: "Nimit"};
var y;

y = x;
console.log("Before changes: ");
console.log("x: ",x);
console.log("y: ",y);

x.name = "Vaibhav";
console.log("After changes: ");
console.log("x: ",x);
console.log("y: ",y);

// here not work because we use = operator it's assign a memory to a new object
x = {name: "Nick"};
console.log("x: ",x);
console.log("y: ",y);


greet(); // Hello Nimit

// Statements 
function greet() {
  console.log("Hello Nimit");
}

anonymousGreet(); // Uncaught TypeError: anonymousGreet is not a function
// Expressions
var anonymousGreet = function () {
  return "Hello Nick";
};

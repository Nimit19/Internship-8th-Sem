var a = 4;
var a = "Hello"; // Declare Globally
console.log(a);

var b = 5; 
console.log(b); // 5
{
    var b = 10;
    console.log(b); // 10
}
console.log(b); // 10
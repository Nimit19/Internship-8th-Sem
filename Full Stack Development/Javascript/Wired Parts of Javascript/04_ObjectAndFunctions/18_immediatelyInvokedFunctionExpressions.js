var a = function(name) {
    return "Hello " + name;
}("Nimit"); // IIFEs

console.log(a);

(function(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
    
}("Nimit","Patel")) // IIFEs



// object literal
var person = {
  name: "Nimit",
  age: 19,
  address: {
    house_no: "808",
    village: "Chikhla",
    city: "Valsad",
    state: "Gujarat",
  },
};

console.log(person); // { Name: 'Nimit', Age: 19 }
console.log(person["name"]); // Nimit
console.log(person["age"]); // 19


function greet(p){
    console.log(p.name);
}

greet(person); // Nimit
greet({ name: "Nick", age:18}); // Nick
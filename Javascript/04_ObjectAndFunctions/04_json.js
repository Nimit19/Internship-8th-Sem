var person = {
  name: "Nimit",
  age: 19,
  address: {
    village: "Chikhla",
    city: "Valsad",
  },
};

console.log(JSON.stringify(person));

console.log(JSON.parse('{ "name": "Nimit", "age": 19, "address": { "village": "Chikhla",  "city": "Valsad"}}'));


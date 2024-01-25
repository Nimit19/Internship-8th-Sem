
let persons = [
    {name: "Nimit", age: 21},
    {name: "Vaibhav", age: 23},
    {name: "Jash", age: 16},
    {name: "Nimit", age: 22},
];

var findPerson = persons.find(function(person) {
    return person.name === "Nimit";
});

console.log(findPerson);

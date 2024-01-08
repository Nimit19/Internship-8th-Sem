let students = ["Nimit", "Yash", "Vaibhav", "Ruchir"];

let countCharacters = students.map(function (student) {
    return { [student]: student.length };
});

console.log(countCharacters);

let person = [
    {name: "Nimit", age: 21},
    {name: "Vaibhav", age: 23},
    {name: "Jash", age: 16},
];

let personAge = person.map(function (p) {
    return p.age;
});

console.log(personAge);
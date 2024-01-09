const students = [
    { name: "Nimit", age: 21, isPassed: true, college: "CGPIT" },
    { name: "Alice", age: 22, isPassed: true, college: "XYZ College" },
    { name: "Bob", age: 25, isPassed: false, college: "CGPIT" },
    { name: "Charlie", age: 19, isPassed: true, college: "CGPIT" },
    { name: "David", age: 19, isPassed: false, college: "LMN School" },
    { name: "Eve", age: 20, isPassed: true, college: "CGPIT" },
];

// let [ name ] = students;
// console.log(name);

let [ {college, name} ] = students;
console.log(college); // CGPIT
console.log(name); // Nimit

const stud = {
    studName: ["Nimit", "Alice", "Bob", "Charlie", "David"],
}

let { studName: [studName1,studName2] } = stud;
console.log(studName1); // Nimit
console.log(studName2); // Alice


 


let nums = [1, 2, , 3, 4, 5, 6, 7, 8, 9];

let filteredNums = nums.filter(function (num) {
  return num > 5;
});

console.log("Filtered Nums: ");
console.log(filteredNums);

let students = [
  { name: "Nimit", age: 21, isPassed: true, college: "CGPIT" },
  { name: "Alice", age: 22, isPassed: true, college: "XYZ College" },
  { name: "Bob", age: 25, isPassed: false, college: "CGPIT" },
  { name: "Charlie", age: 19, isPassed: true, college: "CGPIT" },
  { name: "David", age: 19, isPassed: false, college: "LMN School" },
  { name: "Eve", age: 20, isPassed: true, college: "CGPIT" },
];

let filterStudent = students.filter(function (student) {
  return student.isPassed && student.college === "CGPIT" && student.age < 22;
});

console.log();
console.log("Filtered students: ");
console.log(filterStudent);

var student = {name: "Nimit"};
var marks = [
    {fname: "Vaibhav", grade: 'b'},
    {fname: "Nimit", grade: 'a'},
    {fname: "Ram", grade: 'c'},
]

function getTopperStudent(student, marks){

    return marks.filter(function(stud){
        return student.name === stud.fname;
    });
}

var topperStudent = getTopperStudent(student,marks);
console.log("Topper Student: ");
console.log(topperStudent);

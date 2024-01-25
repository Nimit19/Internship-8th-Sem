var nums = [1, 2, 3, 4, 5];

var getSum = nums.reduce(function (sum, num) {
  return sum + num;
},10);

console.log("Sum: ", getSum);

var students = [
  { name: "Nimit", age: 21, isPassed: true, college: "CGPIT" },
  { name: "Alice", age: 22, isPassed: true, college: "XYZ College" },
  { name: "Bob", age: 25, isPassed: false, college: "CGPIT" },
  { name: "Charlie", age: 19, isPassed: true, college: "CGPIT" },
  { name: "David", age: 19, isPassed: false, college: "LMN School" },
  { name: "Eve", age: 20, isPassed: true, college: "CGPIT" },
];


var getStudentList = students.reduce(function(studentsList, student){
    studentsList.push(student.name);
    return studentsList;
}, []);

console.log("All Student List: ",getStudentList);

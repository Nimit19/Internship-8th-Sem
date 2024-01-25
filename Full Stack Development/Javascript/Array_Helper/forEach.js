let students = ["Nimit", "Yash", "Vaibhav", "Ruchir"]

students.forEach(function(stud){
    console.log(stud);  
});

let numbers = [1, -5, 60, 95, 14, 7];
var max = numbers[0];
numbers.forEach(function(num){
    if (max < num) max = num;
});
console.log("Max Value: " + max);

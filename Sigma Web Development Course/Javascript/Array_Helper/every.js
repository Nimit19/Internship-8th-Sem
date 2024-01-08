var s1 = [
    { name: 'Nimit', isPassed: true },
    { name: 'Jay', isPassed: false },
    { name: 'Alice', isPassed: true },
    { name: 'Bob', isPassed: false },
    { name: 'Charlie', isPassed: true },
 
];

var s2 = [
    { name: 'David', isPassed: true },
    { name: 'Eve', isPassed: true },
    { name: 'Frank', isPassed: true },
    { name: 'Grace', isPassed: true },
    { name: 'Henry', isPassed: true }
]



var allStudentPassedInS1 = s1.every((student) => {
    return student.isPassed;
});

var allStudentPassedInS2 = s2.every((student) => {
    return student.isPassed;
});

console.log("All students passed S1: "+ allStudentPassedInS1);
console.log("All students passed S2: "+ allStudentPassedInS2);

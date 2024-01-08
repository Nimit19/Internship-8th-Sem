var s1 = [
    { name: 'Nimit', isPassed: true },
    { name: 'Jay', isPassed: false },
    { name: 'Alice', isPassed: true },
    { name: 'Bob', isPassed: false },
    { name: 'Charlie', isPassed: true },
 
];

// var s2 = [
//     { name: 'David', isPassed: true },
//     { name: 'Eve', isPassed: true },
//     { name: 'Frank', isPassed: true },
//     { name: 'Grace', isPassed: true },
//     { name: 'Henry', isPassed: true }
// ]

var s2 = [
    { name: 'David', isPassed: false },
    { name: 'Eve', isPassed: false },
    { name: 'Frank', isPassed: false },
    { name: 'Grace', isPassed: false },
    { name: 'Henry', isPassed: false }
]



var someStudentPassedInS1 = s1.some((student) => {
    return student.isPassed;
});

var someStudentPassedInS2 = s2.some((student) => {
    return student.isPassed;
});

console.log("All students passed S1: "+ someStudentPassedInS1);
console.log("All students passed S2: "+ someStudentPassedInS2);

const data = [
    {name:"nimit", age:30},
    {name:"Vaibhav", age:25},
    {name:"yash", age:35},
]


// var ageList = data.reduce((ageList, stud) => {
    
//     ageList.push(stud.age);
//     return ageList;


// }, [])

// var sortedList = ageList.sort();

// var sortedObj = sortedList.map((age)=>{
//     return data.filter((stud) => {
//         return age == stud.age;
//     })
// })

// console.log(sortedObj);

//  1]
a.sort((a,b) => b.age - a.age);
console.log(data);

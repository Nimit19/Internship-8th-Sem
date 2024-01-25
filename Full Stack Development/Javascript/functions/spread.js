const a = [1,2,3,4];
const b = [5,6,7,8];

const c = [...a, ...b];
console.log(c); // [1,2,3,4,5,6,7,8]

const obj1= {
    name: 'Nimit',
    clg:"Cgpit"
}

const obj2 = {
    name:'Vaibhav',  
    age:21,
    isPassed: true,
}

// Here Override nimit to vaibhav
const obj = {...obj1, ...obj2} // { name: 'Vaibhav', clg: 'Cgpit', age: 21, isPassed: true }
console.log(obj);


// // Give an error
// const obj3 = { key1: "value1" };
// const array = [...obj3]; // TypeError: obj is not iterable


const array = [1, 2, 3];
const obj4 = { ...array }; 
console.log(obj4); // { 0: 1, 1: 2, 2: 3 }

const obj5 = { ...true, ..."test", ...10 };
console.log(obj5);// { '0': 't', '1': 'e', '2': 's', '3': 't' }

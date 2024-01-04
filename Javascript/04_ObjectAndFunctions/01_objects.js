var person = new Object();

person["name"] = "Nimit";
person["age"] = 19;

var nameProperty = "name";

console.log(person); // { Name: 'Nimit', Age: 19 }
console.log(person[nameProperty]); // Nimit

console.log(person.name); // Nimit
console.log(person.age); // 19

person.address = new Object();

person.address.house_no = '808';
person.address.village = 'Chikhla';
person.address.city = 'Valsad';
person.address.state = 'Gujarat';

console.log(person);
// {
//     name: 'Nimit',
//     age: 19,
//     address: {
//       house_no: '808',
//       village: 'Chikhla',
//       city: 'Valsad',
//       state: 'Gujarat'
//     }
//  }

// here . has left to right associativity
console.log(person.address); // {house_no: '808', village: 'Chikhla', city: 'Valsad', state: 'Gujarat'}
console.log(person.address.village); // Chikhla
console.log(person.address.state); // Gujarat
console.log(person["address"]["city"]); // Valsad

// here . and [] has same precedence so we use left to right associativity
console.log(person["address"].city); // Valsad

console.log(Object.keys(person)); // [ 'name', 'age', 'address' ]
console.log(Object.values(person)); // ['Nimit', 19,{house_no: '808', village: 'Chikhla',city: 'Valsad', state: 'Gujarat'}]
console.log(Object.values(person.name)); // [ 'N', 'i', 'm', 'i', 't' ]
console.log(Object.entries(person));
// [
//     [ 'name', 'Nimit' ],
//     [ 'age', 19 ],
//     [
//       'address',
//       {
//         house_no: '808',
//         village: 'Chikhla',
//         city: 'Valsad',
//         state: 'Gujarat'
//       }
//     ]
//   ]




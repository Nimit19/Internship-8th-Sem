let ourTuple: [number, boolean, string] = [5, false, 'Nimit'];
// ourTuple[1] = "Nimit"; // Give an Error

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple)

let ourTuple2:readonly [number, boolean, string] = [5, false, 'Nimit'];
// ourTuple2.push('Something new and wrong'); // Give an Error
 
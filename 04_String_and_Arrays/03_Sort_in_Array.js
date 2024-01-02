a = [1, 2, 50, 19, 3, 7, 8]

// Ascending
let compare = (a, b)=>{
    return a - b;
}


// // Descending
// let compare = (a, b)=>{
//     return b - a;
// } 

a.sort(compare);
console.log(a);



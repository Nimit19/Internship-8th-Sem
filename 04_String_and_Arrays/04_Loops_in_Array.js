l1 = [5, 6, 1, 3, 7, 8];

// // 1]
// for (let i = 0; i < l1.length; i++) {
//     console.log(i);
// }

// // 2]
// l1.forEach(element => {
//     console.log(element);
// });

// 3]
for(let item of l1){
    console.log(item);   
}

for(let i in l1){
    console.log(i); // print index
}
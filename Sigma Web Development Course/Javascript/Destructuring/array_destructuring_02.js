const arr = [
    [1,2],
    [3,4],
    [5,6],
];

var result = arr.map(([x,y]) => {
    // return {x:x, y:y};
    return {x, y}; // more better
});
console.log(result);

let marks = {
    Nimit: 95,
    Shiv: 99,
    Jay: 50,
    Nick: 85
}

for (let key in marks) {
    console.log(key);
}

console.log();
for (let key in marks) {
    console.log(key + ": " + marks[key]);
}

console.log();
for (let i = 0; i < Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i] + ": " + marks[Object.keys(marks)[i]]);
}

console.log();
console.log(Object.keys(marks));
console.log(Object.values(marks));
const a = {
    Name: "Nimit",
    Age: 19,
}

console.log(a);
console.log(a["Name"]);
console.log(a["Age"]);

a["Name"] = "Nick";
console.log(a);
a["Gender"] = "Male";
console.log(a);

console.log(a.Gender);

//  Arrays

let hobbies: string[] = ["Cricket", "Football", "Chess"];

let p: {
  name: string;
  age: number;
};

// p = {name:"nimit"} // Error
// p {fName: "nimit"} // Error
p = { name: "Nimit", age: 20 };

let persons: {
  name: string;
  age: number;
}[] = [];

// persons = ["nimit", 21]; // Error

persons = [
  { name: "Nimit", age: 21 },
  { name: "Vaibhav", age: 20 },
];

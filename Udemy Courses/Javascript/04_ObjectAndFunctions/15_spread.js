function greet(n1, ...name) {
  console.log(arguments);
  console.log(n1);

  console.log(name);
}

greet();
greet("Nimit");
greet("Nimit", "Vaibhav");
greet("Nimit", "Vaibhav", "Ruchir");

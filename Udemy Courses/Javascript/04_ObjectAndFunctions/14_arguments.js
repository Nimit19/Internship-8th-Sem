function greet(n1, n2, n3) {
  if (arguments.length == 0) {
    console.log("Missing arguments!");
    console.log("__________________________________________________");
    return;
  }

  console.log(n1);
  console.log(n2);
  console.log(n3);
  console.log(arguments);
  console.log("__________________________________________________");
}

greet();
greet("Nimit");
greet("Nimit", "Vaibhav");
greet("Nimit", "Vaibhav", "Ruchir");

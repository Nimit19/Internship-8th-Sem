function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a); // a, "one"
    console.log("b", b); // b, "two"
    console.log("manyMoreArgs", manyMoreArgs); // manyMoreArgs, ["three", "four", "five", "six"] <-- an array

  }
  
  myFun("one", "two", "three", "four", "five", "six");
  
  
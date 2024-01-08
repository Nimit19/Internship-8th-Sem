let p = new Promise((resolve, reject) => {
  console.log("Promise Pending");

  setTimeout(() => {
    console.log("I am Promise and i am Rejected ");
    reject(new Error("I am an Error"));
  }, 5000);
});

console.log("I am Outside of the Promise...");

console.log(p);

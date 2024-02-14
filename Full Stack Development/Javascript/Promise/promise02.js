let p = new Promise((resolve, reject) => {
  console.log("Promise Pending");

  setTimeout(() => {
    console.log("I am Promise and i am fulfilled ");
    resolve(true);
  }, 5000);
  
});

console.log("I am Outside of the Promise...");

console.log(p);

setTimeout(() => {
  console.log(p);
}, 6000);

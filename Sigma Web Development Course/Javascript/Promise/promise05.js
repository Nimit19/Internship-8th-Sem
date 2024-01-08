let p = new Promise((resolve, reject) => {
  console.log("Promise Pending");

  setTimeout(() => {
    console.log("I am Promise and i am Rejected ");
    reject(new Error("I am an Error"));
  }, 3000);
});

p.catch((err) => {
    console.log("Error Occurred...");
    console.log(err);
    
});

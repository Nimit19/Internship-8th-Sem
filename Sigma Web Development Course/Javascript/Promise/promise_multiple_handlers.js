let p = new Promise((resolve, reject) => {
  console.log("Promise Pending");

  setTimeout(() => {
    console.log("I am Promise and i am fulfilled ");
    resolve(19);
  }, 3000);
});

p.then((val) => {
    console.log("I am handler 1 with value: "+ val);   
});

p.then((val) => {
    console.log("I am handler 2 with value: "+ val);
});

p.then((val) => {
    console.log("I am handler 3 with value: "+ val);
    
});
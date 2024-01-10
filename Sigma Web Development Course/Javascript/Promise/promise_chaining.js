let p1 = new Promise((resolve, reject) => {
  console.log();

  console.log("Promise1 Pending");

  setTimeout(() => {
    console.log("I am Promise1 and i am fullfilled ");
    resolve(19);
  }, 3000);
});

p1.then((val) => {
  console.log();

  console.log("Get val from Promise1: " + val);

  let p2 = new Promise((resolve, reject) => {
    console.log("Promise2 Pending");

    setTimeout(() => {
      console.log("I am Promise2 and i am fulfilled ");
      resolve(95);
    }, 3000);
  });
  return p2;
})
  .then((val) => {
    console.log();

    console.log("Get val from Promise2: " + val);

    let p3 = new Promise((resolve, reject) => {
      console.log("Promise3 Pending");

      setTimeout(() => {
        console.log("I am Promise3 and i am Rejected ");
        reject(new Error("I am an Error"));
      }, 5000);
    });
    return p3;
  })
  .then((val) => {
    console.log();

    console.log("Get val from Promise3: " + val);
  })
  .catch((err) => {
    console.log();

    console.log("Error: " + err);
  });

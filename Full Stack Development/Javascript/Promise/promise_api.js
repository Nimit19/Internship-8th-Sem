let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result of Promise 1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result of Promise 2");
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result of Promise 3");
  }, 3000);
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("I am an Error of Promise 4"));
  }, 2000);
});

// 1]
let promise_all = Promise.all([p1, p2, p3]);
promise_all.then((val) => {
  console.log("Promise all: ");
  console.log(val);
  console.log();
});

// 2]
let promise_allSettled = Promise.allSettled([p1, p2, p3, p4]);
promise_allSettled.then((val) => {
  console.log("Promise all settled: ");
  console.log(val);
});

// 3]
let promise_race = Promise.race([p1, p2, p4]);
promise_race.then((val) => {
  console.log("Promise Race: ");
  console.log(val);
  console.log();
});

// 4]
let promise_any = Promise.any([p1, p2, p4]);
promise_any.then((val) => {
  console.log("Promise any: ");
  console.log(val);
  console.log();
});


// 5]
let promise_resolve_val = Promise.resolve("Fulfilled Promise");
promise_resolve_val.then((val) => {
    console.log("Promise Resolve val: ");
    console.log(val);
    console.log();
});

// // 6]
// let promise_reject_val = Promise.reject(new Error("Rejected Promise"));
// promise_reject_val.then((val) => {
//     console.log("Promise Reject val: ");
//     console.log(val);
//     console.log();
// });
function fib(n) {
  if (n === 1 || n === 2) {
    return n - 1;
  }
  return fib(n - 1) + fib(n - 2);
}

let max = 10;
let i = 1;
let arrOfFib = [];

let temp;
while (true) {
  temp = fib(i);
  if (temp > max) {
    break;
  }
  arrOfFib.push(fib(i));
  i++;
}

console.log(arrOfFib);


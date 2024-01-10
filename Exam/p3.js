function  privateCounter ()  {
  var counter = 0;

  function add() {
    counter++;
  }

  function sub() {
    counter--;
  }

  function print() {
    console.log(counter);
  }
  return {add, sub, print};
};

let  c = privateCounter();
c.add();
c.add();
c.add();
c.print();
c.sub();
c.print();

function privateCounter(){
    var counter = 0;
    return function inner(){
        counter++;
        console.log(counter);
    }
}

var c = privateCounter();
c();
c();
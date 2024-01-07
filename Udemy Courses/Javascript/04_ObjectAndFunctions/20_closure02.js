function buildFunction() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(
            function(){
                console.log(i);
            }
        );
    }
    return arr;

}

var fs = buildFunction();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

// if we you let instead of using var than it give 0 1 2
function buildFunction() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        );
    }
    return arr;

}

var fs = buildFunction();

fs[0](); // 0
fs[1](); // 1
fs[2](); // 2
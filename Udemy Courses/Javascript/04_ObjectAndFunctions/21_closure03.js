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

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
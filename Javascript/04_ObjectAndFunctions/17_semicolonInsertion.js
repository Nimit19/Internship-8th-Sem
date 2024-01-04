function obj1(){
    return
    {
        name: "Nimit"
    }
}

console.log(obj1()); // undefined because after return compiler automatically insert ;

// to avoid do this add curly brackets In same line of return
function obj2(){
    return {
        name: "Nimit"
    }
}

console.log(obj2());

// so it's preferable that we add ; 
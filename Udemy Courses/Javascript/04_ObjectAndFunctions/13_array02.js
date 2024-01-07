var a = [
    19,
    true,
    {
        name:"Nimit",
        age:"21"
    },
    function(name){
        console.log("Hello "+ name); 
    },
    "Hello"
]

console.log(a);

a[3](a[2].name)  // Hello Nimit

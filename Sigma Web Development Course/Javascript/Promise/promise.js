let p = new Promise((resolve, reject) => {
    
    console.log("1. Hello world!");
    
    setTimeout(() => {
        console.log("2. Hello world!"); 
    }, 5000);

});

console.log("3. Hello world!"); 


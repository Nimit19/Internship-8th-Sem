let p1 = new Promise((resolve, reject) => {
    console.log("Promise Pending");
    
    setTimeout(() => {
        resolve(19);      
    }, 3000);
});


p1.then((val)=>{
    console.log("Promise Executed successfully");
    console.log("val: "+ val);
    
})
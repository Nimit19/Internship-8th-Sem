// // 1]
// function b(){
//     var myVal = 3;
//     console.log(myVal);
  
// }

// function a(){
//     var myVal = 2;
//     console.log(myVal);
//     b();
// }

// var myVal = 1;
// a()
// console.log(myVal);


// // 2]
// function b(){
//     console.log("b: ", myVal);
  
// }

// function a(){
//     var myVal = 2;
//     console.log("a: ", myVal);
//     b();
// }

// var myVal = 1;
// a()
// console.log("Outside: ",myVal);

// // 3]
// function a(){

//     function b(){
//         console.log("b: ", myVal);
      
//     }

//     var myVal = 2;
//     console.log("a: ", myVal);
//     b();
// }

// var myVal = 1;
// a()
// console.log("Outside: ",myVal);

// // 4]
// function a(){

//     function b(){
//         console.log("b: ", myVal);
      
//     }

//     console.log("a: ", myVal);
//     b();
// }

// var myVal = 1;
// a()
// console.log("Outside: ",myVal);
  



// synchronization

function delayThreeSecond(){
    var ms = 3000 + new Date().getTime();
    while (new Date().getTime() < ms);
    console.log("Finished Function...");
}

function clickHandler(){
    console.log("Click Event");
}

document.addEventListener("click",clickHandler);

delayThreeSecond();
console.log("Finished execution...");

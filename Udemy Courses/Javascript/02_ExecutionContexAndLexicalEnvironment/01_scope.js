// // 1]
// function b(){
//     var myVal = 3;
//     console.log(myVal); // 3
  
// }

// function a(){
//     var myVal = 2;
//     console.log(myVal); // 2
//     b();
// }

// var myVal = 1;
// a()
// console.log(myVal);  // 1


// // 2]
// function b(){
//     console.log("b: ", myVal); // 1
  
// }

// function a(){
//     var myVal = 2;
//     console.log("a: ", myVal); // 2
//     b();
// }

// var myVal = 1;
// a()
// console.log("Outside: ",myVal); // 1

// // 3]
// function a(){

//     function b(){
//         console.log("b: ", myVal); // 2
      
//     }

//     var myVal = 2;
//     console.log("a: ", myVal); // 2
//     b();
// }

// var myVal = 1;
// a()
// console.log("Outside: ",myVal); // 1

// // 4]
// function a(){

//     function b(){
//         console.log("b: ", myVal); // 1
      
//     }

//     console.log("a: ", myVal); // 1
//     b();
// }

// var myVal = 1;
// a()
// console.log("Outside: ",myVal); // 1
  



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

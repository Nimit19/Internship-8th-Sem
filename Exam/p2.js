let p = "Test@123";
// let p = "Test@";

const pass = p.split("")

function isHaveNum(password) {
    console.log(password);
    
    let temp = false;
    for ( let i of "0123456789"){
        if(password.includes(i)){
            temp = true;
        }
    }
    return temp;
}

function isSpecialChar(password) {
    let temp = false;
    for ( let i of "@#$&*"){
        if(password.includes(i)){
            temp = true;
        }
    }
    return temp;
}

// function isSpecialChar(password) {
//     let temp = false;
//     for ( let i of "@#$&*"){
//         if(password.include(i)){
//             temp = true;
//         }
//     }
//     return temp;
// }

console.log(pass);


if (pass.length > 6 && pass.length < 14) {
  if (pass[0] === pass[0].toUpperCase()) {

    if(isHaveNum(pass) && isSpecialChar(pass) ){
        console.log("Passwords is Valid");
        
    }else{
        console.log("Password is not valid");

    }

  } else {
    console.log("Password is not valid");
  }
} else {
  console.log("Password is not valid");
}


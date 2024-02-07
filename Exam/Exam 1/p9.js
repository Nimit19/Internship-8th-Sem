let s = "Nimit";

let ans = ""
for(let i of s){
    if ("AEIOUaeiou".includes(i)){
        ans = ans + i;
    }else if ("BCDFGHJKLMNPQRSTVWXYZ".includes(i)){
        ans = ans + i.toLowerCase();
    }else{
        ans = ans + i.toUpperCase();
    }
    
}

console.log(ans);

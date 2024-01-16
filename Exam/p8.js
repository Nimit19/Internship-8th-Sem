let s = "nnnmmyfff";

let obj = { };

for (let i of  s){
    if (Object.keys(obj).includes(i)) obj[i] = obj[i] + 1;
    else obj[i] = 1; 
}
console.log(obj);


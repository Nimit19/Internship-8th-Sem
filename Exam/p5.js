const arr = [1,2,3,4,5,6,7,8,9];

let n = 3;

let arr2 = [];
for(var i = 0; i < arr.length; i = i + n){
        let a = []
        for (let j = i; j < i + n; j++){
            if (j >= arr.length){
                a.push("-")
            }else{
                a.push(arr[j])
            }
        }
        arr2.push(a);  
}

console.log(arr2);


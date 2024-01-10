let arr = [2,4,10,[12,4,[100,99],4],[3,2,99],0];


// console.log(typeof(arr) === "object");

// function getSum(a){
//     return a.reduce( (previous, item) => {
//         let x;  
//         x = item
//         if(typeof(item) === "object") {
//            x = getSum(item)
           
//         }
//         return previous + x;
//     },0);
// }


// console.log(getMax(arr));

function getMax(a){
    return a.reduce( (max, item) => {

        let x = max;  

        if(typeof(item) === "object") {
            if (x < getMax(item)){
                x = getMax(item);
            }
            
        }

        if (item > max){
            x = item;
        }
        
        return x;

    },0);
}


console.log(getMax(arr));

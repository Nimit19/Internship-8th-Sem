let arr: number[] = [1,2,3,4,5,6];
arr.push(4);
// arr.push("nimit"); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const names: readonly string[] = ["Nimit"];
// names.push("Jack"); 
// Error: Property 'push' does not exist on type 'readonly string[]'.


let nums = []; // it's any type
nums[1]="hii";
nums[2]= true;




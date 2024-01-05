var p1 = {
    firstName:"Nimit",
    lastName:"Patel",
    getFullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

var p2 = {
    firstName: "Vaibhav",
    lastName: "Master",
}

console.log(p1.getFullName.apply(p2)); // Vaibhav Master

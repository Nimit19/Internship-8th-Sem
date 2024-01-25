var person = {
    firstName : "default",
    lastName : "default",
    getFullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

var nimit = {
    firstName : "Nimit",
    lastName : "Patel",
}

nimit.__proto__ = person;

console.log(nimit.getFullName()); // Nimit Patel


var vaibhav = {
    firstName : "Vaibhav",
}

vaibhav.__proto__ = person;
console.log(vaibhav.getFullName()); // Vaibhav default



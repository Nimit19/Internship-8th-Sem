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

for (var prop in nimit){
    console.log(prop + ": "+ nimit[prop]);
}
console.log("________________________________________");

for (var prop in nimit){
    if(nimit.hasOwnProperty(prop)){
        console.log(prop + ": "+ nimit[prop]);

    }
}
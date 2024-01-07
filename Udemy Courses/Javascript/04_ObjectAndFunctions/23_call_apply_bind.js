var person = {
    firstName : "Nimit",
    lastName : "Patel",
    getFullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.getFullName());

var logName = function (n1, n2){
    console.log("Logged: "+ this.getFullName());  
    console.log("Arguments: " + n1 + ", " + n2);
    console.log("---------------------------------------");
     
}

var logPersonName = logName.bind(person);
logPersonName("Nimit","Vaibhav");

logName.call(person, "Nimit","Vaibhav");
logName.apply(person, ["Nimit","Vaibhav"]);
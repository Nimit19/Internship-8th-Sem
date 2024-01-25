function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName =  function(){
    return this.firstName + " " + this.lastName;
}

var nimit = new Person("Nimit","Patel");
console.log(nimit);
console.log(nimit.getFullName());

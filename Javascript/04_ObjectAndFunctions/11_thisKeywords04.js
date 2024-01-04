// this Inside Inner Function

var person = {
    name:"Nimit",
    log: function() {
        console.log(this); // { name: 'Nimit', log: [Function: log] }
        this.name = "Vaibhav"
        console.log(this); // { name: 'Vaibhav', log: [Function: log] }
        function setName(newName){
            this.name = newName;            
        }
        setName("Ruchir");
        console.log(this); // { name: 'Vaibhav', log: [Function: log] }

    }
}

person.log();
console.log(this);


// In above code we can see that the Inner function can't able to change the name variable.
// some people called it's a bug but that the javascript work in this case.
// we can also avoid this problem using arrow function


// we have Pattern for this to avoid this problem
console.log("Second Scenario: ");

var person = {
    name:"Nimit",
    log: function() {
        var self = this;
        console.log(this); // { name: 'Nimit', log: [Function: log] }
        self.name = "Vaibhav"
        console.log(this); // { name: 'Vaibhav', log: [Function: log] }

        function setName(newName){
            self.name = newName;  
        }

        setName("Ruchir");
        console.log(this); // { name: 'Ruchir', log: [Function: log] }

    }
}

person.log();
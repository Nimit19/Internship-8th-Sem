// this Inside Object Method

var person = {
    name:"Nimit",
    log:function(){
        console.log(this); // { name: 'Nimit', log: [Function: log] }
        console.log(this.name); // Nimit
        this.name = "Vaibhav"
        console.log(this); // { name: 'Vaibhav', log: [Function: log] }
    }
}

person.log()
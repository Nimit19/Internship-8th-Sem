// when to use arrow functions

var team = {
    members:["Nimit", "Vaibhav", "Ruchir"],
    teamName:"Smart Codder",
    teamSummary: function(){
        return this.members.map(function(member){
            return `${member} is member of team ${this.teamName}`
        });
    }
}

console.log(team.teamSummary());

// first way to solve error  Using bind
var team1 = {
    members:["Nimit", "Vaibhav", "Ruchir"],
    teamName:"Smart Codder",
    teamSummary: function(){
        return this.members.map(function(member){
            return `${member} is member of team ${this.teamName}`
        }.bind(this));
    }
}

console.log();
console.log("First way to solve error Using bind: ");
console.log(team1.teamSummary());


// Second way to solve error  Using catch this in self
var team2 = {
    members:["Nimit", "Vaibhav", "Ruchir"],
    teamName:"Smart Codder",
    teamSummary: function(){
        var self = this;
        return this.members.map(function(member){
            return `${member} is member of team ${self.teamName}`
        });
    }
}

console.log();
console.log("Second way to solve error Using catch this in self: ");
console.log(team2.teamSummary());


// Third way to solve error Using arrow functions
var team3 = {
    members:["Nimit", "Vaibhav", "Ruchir"],
    teamName:"Smart Codder",
    teamSummary: function(){

        return this.members.map((member) => {
            return `${member} is member of team ${this.teamName}`
        });
    }
}

console.log();
console.log("Third way to solve error Using arrow functions: ");
console.log(team3.teamSummary());
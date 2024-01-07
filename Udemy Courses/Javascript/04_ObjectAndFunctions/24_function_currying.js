function greet(language, firstName, lastName) {

    if(language === 'en'){
        console.log("Hello " + firstName + " " + lastName);
    }

    if(language === 'guj'){
        console.log("Kem Chho? " + firstName + " " + lastName);
    }        
}

var greetInEnglish = greet.bind(this,'en');
var greetInGujarati = greet.bind(this,'guj');
var greetToRuchir = greet.bind(this,'en',"Ruchir", "Parekh");

greetInEnglish("Nimit","Patel"); // Hello Nimit Patel
greetInGujarati("Vaibhav","Master"); // Kem Chho? Vaibhav Master

greetToRuchir(); // Hello Ruchir Parekh
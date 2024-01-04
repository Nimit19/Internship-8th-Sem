function greet(language){
    return function(firstName,lastName){
        if(language === 'en'){
            console.log("Hello " + firstName +" " + lastName);
        }        

        if(language === 'guj'){
            console.log("Kem Chho? " + firstName +" " + lastName);
        }        
    };
}

var greetInEnglish = greet('en');
var greetInGujarati = greet('guj');

greetInEnglish("Nimit", "Patel");
greetInGujarati("Nimit", "Patel");
function greet(firstName, lastName, language) {

    language = language || "guj";

    if(language === 'en'){
        console.log("Hello " + firstName + " " + lastName);
    }

    if(language === 'guj'){
        console.log("Kem Chho? " + firstName + " " + lastName);
    }


    
}


function greetInEnglish(firstName, lastName) {
    return greet(firstName, lastName, "en");
}

function greetInGujarati(firstName, lastName) {
    return greet(firstName, lastName, "guj");
}



greet("Nimit", "Patel"); // Kem Chho? Nimit Patel

greetInGujarati("Nimit", "Patel"); // Kem Chho? Nimit Patel
greetInEnglish("Nimit", "Patel"); // Hello Nimit Patel
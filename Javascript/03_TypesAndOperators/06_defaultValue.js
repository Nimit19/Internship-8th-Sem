function greet(name){
    console.log("Hello "+ name);
}

greet('Nimit');
greet();

function greeting(name){
    name = name || '<Your default Name>';

    console.log("Hello "+ name);
}

greeting('Nimit'); // Hello Nimit
greeting(); //Hello <Your default Name>
greeting(0); // Hello <Your default Name>




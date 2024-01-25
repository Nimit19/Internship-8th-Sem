function calculateTax(income: number = 5000): number{
    // let x; // Give an error

    if(income< 50_000){
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax();
calculateTax(8000);
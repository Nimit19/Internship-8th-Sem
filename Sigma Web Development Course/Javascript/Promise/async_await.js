async function fetchCollegeData(){
    let fetchStudent = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("Student Name: Nimit Patel");
        }, 2000);
    });

    let fetchCollege = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("College Name: CGPIT");
        }, 5000);
    });

    console.log();
    console.log("Fetching Student Name....");
    let sName = await fetchStudent
    console.log(sName);

    console.log();
    console.log("Fetching College Name....");
    let cName = await fetchCollege
    console.log(cName);
    

    return [sName, cName];

}

console.log("Welcome to College Database!");

let data = fetchCollegeData();
data.then((data) => {
    console.log();
    console.log(data);
});


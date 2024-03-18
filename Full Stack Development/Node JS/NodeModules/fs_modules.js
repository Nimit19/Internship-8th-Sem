const fs = require("fs");

fs.writeFileSync("first.txt", "Hello Nimit");
fs.writeFile("second.txt", "Hello Nimit", (err) => {});

fs.appendFileSync("first.txt", "\nThe Pro Coder");

const result = fs.readFileSync("./first.txt", "utf-8");
console.log(result);

fs.readFile("./second.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

fs.unlinkSync("./second.txt");

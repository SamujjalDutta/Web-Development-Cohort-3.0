const fs = require("fs");
function print(err, data) {
    if (err) {
        console.log("File not found ");
    }
    else {
        console.log(data);
    }

}
fs.readFile("./Class 4/a.txt", "utf-8", print);
fs.readFile("./Class 4/b.txt", "utf-8", print);
console.log("Done");


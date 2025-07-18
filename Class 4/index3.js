// reading from two files
const fs = require("fs");
const contents = fs.readFileSync("./Class 4/a.txt", "utf-8");
console.log(contents);
const contents2 = fs.readFileSync("./Class 4/b.txt", "utf-8");
console.log(contents2);
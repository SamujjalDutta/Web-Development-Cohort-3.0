console.log("Hi");
function timeout() {
    console.log("Click the button");
}
setTimeout(timeout, 5000);
let c = 0;
for (let i = 0; i < 1000000000; i++) {
    c++;
}
console.log(c);
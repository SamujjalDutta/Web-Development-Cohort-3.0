function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms)); // ignore the function definition for now
    return p;
}
function callback() {
    console.log("3 second have passed");

}
// let p = setTimeoutPromisified(3000);
// console.log(p);
setTimeoutPromisified(3000).then(callback);


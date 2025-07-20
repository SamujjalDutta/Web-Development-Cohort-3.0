// defining the setTimeoutPromisified() function by our own
function waitFor3s(resolve) {
    setTimeout(resolve, 3000);
}
function setTimeoutPromisified() {
    return new Promise(waitFor3s);
}
function main() {
    console.log("main is called");
}
setTimeoutPromisified().then(main);
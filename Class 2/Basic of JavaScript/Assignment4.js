// Create a function that takes an array of objects as inputs
// and returns the users whose age > 18 and are male.
function printArray(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].gender === "male" && arr[i].age > 18) {
            arr2.push(arr[i]);

        }
    }
    return arr2;
}
let arr = [{
    fname: "Samujjal",
    age: 20,
    gender: "male"
}, {
    fname: "Priya",
    age: 18,
    gender: "female"
}];
console.log(printArray(arr));
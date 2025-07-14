// Q. Write a function sum that finds the sum of two numsbers.
// Side quest- Try passing in a string instead of number and see what happens 
function Sum(a, b) {
    let totalSum = a + b;
    return totalSum;

}
let ans1 = Sum(10, 29);
let ans2 = Sum("Samujjal", "Harkirat"); // If we pass strings it simply joins the strings and return them. And if we change the + sign to - it retuns as NAN.
console.log(ans1);
console.log(ans2);
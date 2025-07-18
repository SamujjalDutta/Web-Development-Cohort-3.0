// write a function that give the sum from 1 to n
function Sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
let ans = Sum(10);
console.log(ans);
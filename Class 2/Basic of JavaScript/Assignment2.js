function canVote(age) {
    let vote = (age >= 18);
    return vote;
}
let ans = canVote(9);
console.log(ans);
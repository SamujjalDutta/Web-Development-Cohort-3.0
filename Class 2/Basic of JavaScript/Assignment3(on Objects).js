// Q.Write a function that takes a user as an input and greets them with their name and age.
// Also tell they are eligile for vote or note.
function greet(user) {
    console.log("Hi, " + user.name + " your age is " + user.age);
    if (user.age >= 18) {
        console.log(user.name + " you are eligible for voting ");
    }
    else {
        console.assertlog(user.name + " you are not eligible for voting ");
    }
}
let user = {
    name: "Samujjal",
    age: 20
}
greet(user);
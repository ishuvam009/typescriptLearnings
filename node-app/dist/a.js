"use strict";
// let x: number = 20;
// x = 80;
// console.log(x);
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const res = isLegal({
    firstName: "Shuvam",
    lastName: "Mandal",
    age: 24,
});
console.log(res);

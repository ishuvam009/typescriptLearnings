// let x: number = 20;
// x = 80;
// console.log(x);

// function greet(firstName: string){
//     console.log("Hello"+firstName);
    
// }

// greet("Shuvam");

//sun function

// function sum(a: number,b: number){
//     return a + b;
// }

// console.log(sum(20,60));

//returns boolean 

// function isLegal(age: number): boolean {
//     if(age>18){
//         return true;
//     }else {
//         return false
//     }
// }

// isLegal(24);


//passing a gunction inside another function 

// function runAfterTwoSec(funn: ()=> void){
//     setTimeout(funn, 2000)
// }

// runAfterTwoSec( ()=>{
//     console.log("Hello");
    
// })



//Interfaces

interface Users {
    firstName: string,
    lastName: string,
    age: number,
}

function isLegal(user: Users){
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}

const res = isLegal({
    firstName: "Shuvam",
    lastName: "Mandal",
    age: 24,

})

console.log(res);
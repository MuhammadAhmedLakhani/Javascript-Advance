
//--arrow function


//like let variable normal function also has hoisting problem as normal functions are fully hoisted (name and body as well)
//in example below function is declared below and called before declaration still it is acesible 
//hoisting can cause confusion in flow of program

//hoisting problem can be solved if we put the function inside a variable 

// if you remove the function keyword and replace it with arrow(=>) then its an arrow function

// arrow function can only  be declared as expression (inside variable)



// let f = (n) => {
//     console.log(n)
// }

// f("ahmed")


//V2 (short sybtax)

//if return is of one line onlt then return keyword can be removed and curly brackets as well
//if the prameter os one only then round brackets can also be removed

let f = n => n + 100 

console.log(f(2))



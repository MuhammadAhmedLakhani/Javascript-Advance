
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
//if the prameter is one only then round brackets can also be removed

// let f = n => n + 100 

// console.log(f(2))


//arrow functions solved the hoising problem

//arrow function cannot be dec;aredwithout vaiable (expression)

//arrow  function doesnot have its own this binding as oppose to normal function

//instead arrow function looks for its parent and its this value is ame as of its parent

// let obj = {
//     name:"Ahmed",
//     balance:10000,
//     showBalance:() => {
//         console.log(this)
//     }
// }



// obj.showBalance()

// //since parent has window object it is also assign to it 



// let obj1 = {
//     name:"Ahmed",
//     balance:10000,
//     showBalance:function(){
//         console.log(this)
//     }
// }


// obj1.showBalance()


//--argument

//normal function has keyword argument and it has list of arguments ans also other methods which are not very helpful along with the prototype

//arrow function has no argujmnets and its vey light and performance efficient




function normal(n){
    console.log(arguments)
}

normal(5)

let  a = () => {
    console.log(arguments)
}


a()




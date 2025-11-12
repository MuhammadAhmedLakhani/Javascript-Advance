
//----rest operator
//there can be posiiblity when you donot have the right info about no of arguments user can pass in a function
//inorder to handle them rest operator is used
//rest operator is placed as the function parameters
//rest operator starts with 3 dots followed by variable name


function restFunction(school,...rest){
    console.log(rest)

    //rest operator in action
}

restFunction("SMIT","a","b","hello","hi","bye")



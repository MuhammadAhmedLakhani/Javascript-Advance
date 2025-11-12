
//--array methods(call back)
//these are advance array methods use call back functions

// ---forEach() method

//forEach iterate over each element of the array 
//it does not return anything
//call back function first argument is array element while second argument is index and thirs optional argument is array it self

// var arr = ["Karachi","Lahore","Islamabad"];



// arr.forEach(function(elem,i){
//     console.log(elem,i)
// })



// ---map-method()
//same as forEach but with iteration it also return new array
//it transform the entire array


var arr = ["Karachi","Lahore","Islamabad"];

let result = arr.map(function(elem){
    return `${elem} , Pakistan`
})


console.log(result)
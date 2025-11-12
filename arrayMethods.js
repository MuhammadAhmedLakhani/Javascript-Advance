
//--array methods(call back)
//these are advance array methods use call back functions

// ---forEach() method

//forEach iterate over each element of the array 
//it does not return anything
//call back function first argument is array element while second argument is index and thirs optional argument is array it self

var arr = ["Karachi","Lahore","Islamabad"];



arr.forEach(function(elem,i){
    console.log(elem,i)
})
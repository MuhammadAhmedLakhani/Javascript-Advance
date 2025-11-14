
//--or operator ||

//i this example the result will have a value depend on age variable
//as we know that or operaor looks for one true value and if it receives one true at first it donot go ahead and just return  
//if age value is 0 then it is false so or(||) operator will check next value ("not available") in quest of true 
//as a result result will have a "not available as value"

let  age = 0;

let result = age || "not available"

console.log(result)
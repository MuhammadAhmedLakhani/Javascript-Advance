
//--or operator ||

//i this example the result will have a value depend on age variable
//as we know that or operaor looks for one true value and if it receives one true at first it donot go ahead and just return  
//if age value is 0 then it is false so or(||) operator will check next value ("not available") in quest of true 
//as a result result will have a "not available as value"

// let  age = 0;

// let result = age || "not available"

// console.log(result)

//--And operator(&&)

//as we know that and operator looks for both true values and if it encounters one false value it donot go aheasd and return 
//in below example the final output will be "age is available"
//it is because  age is true so && operator go ahea din search of next true value and as a result "age is available" is assigned 



let age = 20

let result = age && "age is  available"

console.log(result)
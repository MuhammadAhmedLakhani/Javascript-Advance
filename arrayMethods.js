
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


// var arr = ["Karachi","Lahore","Islamabad"];

// let result = arr.map(function(elem){
//     return `${elem} , Pakistan`
// })


// console.log(result)


// ----filter() method

//same as map but also filterout required condition
//it expects true and false in retuen statement like if block
//if true then add element to new array and in false donot do so

// var arr = ["Karachi","Lahore","Islamabad"];

// var result = arr.filter(function(elem){
//     return elem === "Islamabad";
// })



// console.log(result)


//---V2

//filter method allowed you to have more than one condition through use of && operator

// let arr = [ {name:"Karachi",population:500}, {name:"Lahore",population:400},{name:"Islamabad",population:300}];



// let result = arr.filter(function(elem){
//     return elem.population > 200 && elem.population < 500
// })


// console.log(result)

//----find() method

//it is similar to filter method except for two things:
//it only return one result even though two eleemnt meet teh criteria but first one is picked
//it only return an element not array of result unlike filter
//also it also support one condition

//--note
//even though both ahmed and ahad both qualifies for the condition but only first one (ahmed) is counted
//also the result is not an array but the elelment itself inthis cas ean object


// let arr = [{name:"Ahmed",age:25},{name:"Ahad",age:23},{name:"Ghous",age:26}]

// let result = arr.find(function(elem){
//     return elem.name.slice(0,1)=== "A"&& elem.age > 22   
// })


// console.log(result)


//---reduce method

//it is mainly use for taking sum of the individual element of  the array
//unlike other array methods it takes two arguments :
//1 is call function and other is an identifies
//identifies is act as new variable and can be set to as default value 


//if 2 argument is not provided then array first element is taken is its value (arr[0])

//one first element initial default value is used if provided then this value is return to it after processing  and new value is used in seconfd element of the array and so on 

//finallly final value of the initial is returned as result


// let arr = [{name:"Ahmed",balance:849},{name:"Ahad",balance:5469},{name:"Ghous",balance:9469}]



// let result = arr.reduce(function(initial, elem){
//     return initial + elem.balance
// },0)

// console.log(result)


//---findIndex() method

// findIndex is exactly same as find() array method but instead of returning the element it returns the index of the element that first passed the condition given

//it return minus one if no ele,emtn passed the condition given

let arr = [{name:"Ahmed",age:25},{name:"Ahad",age:23},{name:"Ghous",age:26}]



let result = arr.findIndex(function(elem){  
    // console.log(elem.name.slice(0,2) )
    return elem.name.slice(0,2) === "Ah"

})

console.log(result)
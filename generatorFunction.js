
//--Generator Function

// A Generator Function is defined using the function* syntax:

//id basically return an object each time when next function is used
//next function is use for resuming generator function execution and next() method stops as long as it encounters a keyword yeild
//yield keyword has a value as acts as stop point of execution of generator function

//nexttime next method is called it reusmes the generator function execution from the point it last had executed

//the object nect method return has value of yield which it encounters and also the done keyword set to boleon value(true or false) 

//boleon value give the status of completeion of whole generator function

//in our example in 4th time when next method is used the return object has undefine means 
// no yield value present and also done now equals to true



function* generatorFunction(){

    console.log("this code runs or not")
    yield  "first stop";
    console.log("this code runs or not")

    yield "Second stop";
    console.log("this code runs or not")

    yield  "Third stop";
    console.log("this code runs or not")

}

let generatorExecution = generatorFunction()

console.log(generatorExecution.next())
console.log(generatorExecution.next())
console.log(generatorExecution.next())
console.log(generatorExecution.next())

//setTimeout function is a browser timer function
//it is the exampple of asyncronous programming as
//code after setTimeout continues to runs and doesnot wait for it
// to run 
//by default js is syncronous  programming language


// console.log("Hello")

// setTimeout(function(){
//     console.log("waiting")
// },1000)



// console.log("Hye")


//---v-2


for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    },1000)
}

//result is 5 times i value which is 5


//Event loop consist of call stack taskQue and   Web ApI

//any asyncronous functions like setTimeout goes to Web api

// routine tasks are set in macroque from which it is transfer to 
// call stack for execution after which the webapi comes in micro ques and gets executed by moving to call stack

//when first program runs for loop runs ans all set times function are transfered to webAPi five time
//after loop eneded and after 1 sec all 5 setTimeout functions 
// all at once moves to que fo transfer to call stack for execution
// that why the final value of i which is 5 when loop breaks iss passed to all 5 setTimeout function and result in value 5 console to five times

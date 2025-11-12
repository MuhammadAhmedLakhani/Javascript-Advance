


//---call back function

//we in real life call someone and if the other person is busy and doesnot respond at that time
// when the other person call back when free
//similar concept happens in js 
//when we call a function and it is busy it doenot respond
//but when free and inorder to inform/do something when free it need another function to tell its free and finishes its tasks of whatever it was busy on 
//this function to inform the free status is called "callback" function
//call back function is itself a function and passsed to function
//here in this example function  named "callBack()" is itself a callback function ans is passed as an argument to abc function


// function abc(cb){
//     setTimeout(function(){
//         console.log("Done")
//         cb()
//     },5000)

// }
// function callBack(){
//     console.log("abc free hogaya hai")
// }

// abc(callBack)




// ---call back v-2

//setTimeout is itself a callback function 
//when it is called it waits for no of seconds mentioned as another argument
//when time passes it callback the function we passed to it as a first argument  

function xyz(){
    console.log("now i am free lets talk about business")
}

setTimeout(xyz,3000)
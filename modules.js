
//--modules

//if you want some function to be available in another file then modules can be used 

//export the desired function as an object(curley brakets)

//recieves the function in another file through import {} in object style followed by from destination file

//donot forget to include typ;e module in script tag as well





let getDate = ()=>{
   return  new Date().toDateString()
}


let getTime = () => {
    return new Date().getTime()
}

let appName = "Quiz"



export { getDate ,getTime , appName}
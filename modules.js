
//--modules

//if you want some function to be available in another file then modules can be used 

//export the desired function as an object(curley brakets)

//recieves the function in another file through import {} in object style followed by from destination file

//donot forget to include typ;e module in script tag as well





export let getDate = ()=>{
   return  new Date().toDateString()
}


export  let getTime = () => {
    return new Date().getTime()
}

export let appName = "Quiz"

//=-default export

// export default means that its system export (understood)
//you donit need curley braket neither in export nor in import

//you can even change the method(or anyother thing exported) to your custom one while importing them


//-V3


//instead of exporting multiple elelments in the end of file you can export them when they sre declsred 
//by writing export before the declaration




export default getDate
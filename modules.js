
//--modules

//if you want some function to be available in another file then modules can be used 

//export the desired function as an object(curley brakets)

//recieves the function in another file through import {} in object style followed by from destination file

//donot forget to include typ;e module in script tag as well
    
//--default V2

//export  defualt can also be declared while declaring function
//but name must be ommited as it can be called with any name in importing file
//but there is a bittle neck that you cannit do bith simple export and default export in a function with this declaration style method

//for this purpose it is advided to do export and default export in the end of the file



let getDate =  () => {
    return new Date().toDateString()
}


let getTime = () => {
    return new Date().getTime()
}

let appName = "Quiz"

//=-default export

// export default means that its system export (understood)
//you donit need curley braket neither in export nor in import

//you can even change the method(or anyother thing exported) to your custom one while importing them


//-V3


//instead of exporting multiple elelments in the end of file you can export them when they sre declsred
//by writing export before the declaration


export {getDate , getTime , appName}

export default getDate
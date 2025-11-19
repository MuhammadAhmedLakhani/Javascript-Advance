
//Frontend  need data for interactive webapps
//data can be accessed directlr form front end to backend efficiently

//instead backend app is made as it can only talk witha server as server doesnot communicate with front end due to security issues
//but anway front end need date to display or send data to server 
//for solving this issue API aarives with a bang
// (Application Porgramming Interface)
//api is the bridge btw front and back end

//there is a protocol for api communication from browser called "Https" (HyperText Transfer Protocol)

//HTTPS has methods like Get  Post Put etc

// .Get is used for getting data from server
// .Posr is used for sending data to server
// .put and .fetch is used for updating data at server
//Api has alot of methods

//API in Js

//in javascript to get data from the api fetch method is used

//we are using fake api for learning purposes


// https://fakestoreapi.com/products

// ..with respect to location object
// in url above :

// "https" is protocol

// "fakestoreapi.com/products" is hostName

//"products" is pathName

//"https://fakestoreapi.com/products" is href/dulPath


//in api formate:

//"https://fakestoreapi.com" is called base url

//"/products" is called endPoint(can be multiple)

//in js fetch method is used for getting data from the bacendApp server 
// .then() method is used for getting api result
//.then() calls  a call back function which is called when data is transfered from server to frontend in a parameter (usually res for response)
//in call function we decide/define what to do with data
//we convert the data to special format called json
//another .then is used as  json() is asyncronous method and second then donot run until first then got result of its call back function and return back to res variable

// --Getting API data

//since process of fetching data from API is asyncronous(line below this donot wait for it to complete processing)
//We cannot just get API data outside the fetch as whenfetch is busy doing its work the variable looks for res(data) early which isnot available as of yet

//call back function is the solution of this issue

//when second .then gets value it call the callback function (cb)
//cb consoles the value 


let getData = (cb) => {
    
    fetch("https://fakestoreapi.com/products").
    then((res)=> res.json()).
    then((res1)=> cb(res1) )



}    




getData((data) => console.log(data,"data") )
getData((data) => console.log(data,"data") )
getData((data) => console.log(data,"data") )
















//In previous section you learned to fetch data from API through fetch method
//but you would need another callback function when data was converted into json finally

//what if api fetching has error then you would need to have another
// call back function to handle this

//promises comes as a solution of this issue and also do avoid callback hell they are helpful


//promises has two states resove() and reject()
//if resolves then run speciifc code
//if failed(reject) then run that specific error handle
//unlike normal function promise is called differently




let getData = new Promise((resolve,reject) => {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=5d5b00f779b258582823b9da194fa713").
    then((res)=>res.json()).
    then((res)=>resolve(res)).
    catch((err)=>reject(err))


})

//calling promise is different as take esolve in then method and
//reject in catch method

getData
.then((res)=>console.log(res))
.catch((err)=>console.log(err))








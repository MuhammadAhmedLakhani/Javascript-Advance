// import {getDate as Date ,  getTime , appName } from "./modules.js";

// import date from "./modules.js"

// -- steric all

// using steric(*) in import and saving it as a variable like all moves the all exported items to this new variable in our case its "all" 

//now while acess it you need to behave like all is object which it is and acess the itsms using . notation like below


import * as all from "./modules.js"

console.log(all.default())









// let getDate  = () => {
//     return "getDate duplicate"

// }



// console.log(getDate())

// console.log(Date(),"alisas one")




//there is a possiblity that the imported method and new method you created in modules2.js file have same name 
//in order distinguish them you can use "as" keyword and give it a new alias name

//in this way both methods are acessible as depicted below






















//look no need of curley brakets while importing

//also the name of getDte change to date and its acceptable as default export

//default export is only available to one item only per file









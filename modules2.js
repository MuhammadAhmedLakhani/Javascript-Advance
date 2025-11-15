import {getDate as Date ,  getTime , appName } from "./modules.js";

import date from "./modules.js"

//there is a possiblity that the imported method and new method you created in modules2.js file have same name 
//in order distinguish them you can use "as" keyword and give it a new alias name

//in this way both methods are acessible as depicted below




let getDate  = () => {
    return "getDate duplicate"

}



console.log(getDate())

console.log(Date(),"alisas one")


























//look no need of curley brakets while importing

//also the name of getDte change to date and its acceptable as default export

//default export is only available to one item only per file









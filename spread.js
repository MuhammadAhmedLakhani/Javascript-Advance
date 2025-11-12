
//--spread operator
//spread operator helps in merging teo objects/arrays
//easily and smoothly 
//like spreading two things and making them one 






let arr = ["Ahmed" , "Ahad"];
let arr1 = ["Hassan" , "Zain"];

let merge = [...arr,...arr1]

console.log(merge)



let obj = {
    name:"Ahmed",
    email:'ahmed@gmail.com'
}

var school = {
    schoolName: "SMIT",
    location:"Bahadurabad"
}



var mergeObject = {...obj,...school}

console.log(mergeObject)
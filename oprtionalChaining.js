

//---optional chaining
//due to error in line 15 the code on line 17 doesnot execute at all 
//it is because the program has crashed and no longer runs
//this is an issue that ther is an issue in object properties(like calling those properties which are not present) then whole program 
//crashes and remaining code donot run at all

//now in optionalchaining you put "?" before the object property which you are unsured that it is present or not
//this question mark (?) prevent the javascript the produce error if there is an error and undefined id return
//this is great help as it stops the program from crashing and remaining code do runs as it should be


let obj = {
    student:{
        name:"Ahmed",
        school:"SMIT"
    }
}


console.log(obj?.student?.school?.details?.name)

console.log(obj.student.name)
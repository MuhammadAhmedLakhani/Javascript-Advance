

//---optional chaining
//due to error in line 15 the code on line 17 doesnot execute at all 
//it is because the program has crashed and no longer runs
//this is an issue that ther is an issue in object properties(like calling those properties which are not present) then whole program 
//crashes and remaining code donot run at all


let obj = {
    student:{
        name:"Ahmed",
        school:"SMIT"
    }
}


console.log(obj.student.school.details.name)

console.log(obj.student.name)

//with help of spread operator we copied the object and array as well 

//but there are more concept like deep and shallow copy
//lets dive in detail
//when you make 2 copies of object from original one all will share the same reference in memory

//if change one object the same changes reflect back in all 3 objects which is an issue

//but there is a way to make the new object as copy of original 
//without shsring its reference in memory
//this is really helpful as if will prevent the changes tobe reflect in all three objects when we change one
//as in this example obj2 has new reference through help of spread operator(issue gets solved partially)
//this copying method is known as "shallow copy "



// let obj = {
//     name:"Ahmed"
// }



// let obj1 = obj

// let obj2 = {...obj1}

// obj2.name = "Ahad"
// console.log(obj,obj1,obj2)


// --deep-copy

// issue comes when the original object has nested object
//if you try to change  obj2's nested object value ths same change reflect back to all other objects
//it is because the inner/nested object still shares the same reference as the all three objects
//this is the limitation of the "shallow copy" 




let obj = {
    name:"Ahmed",
    school:{
        schoolName : "SMIT"
    }
}


let obj1 = obj;

let obj2 = {...obj1};

obj2.school.schoolName = "Saylani";

console.log(obj,obj1,obj2)








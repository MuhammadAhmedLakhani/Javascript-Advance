
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

//you also need to make new reference of nested object as well
//like in example below scholl property has new reference in obj2
//but thiss is not a efficient method as if there are many nested objects you would need to make new references of them as well







// let obj = {
//     name:"Ahmed",
//     school:{
//         schoolName : "SMIT"
//     }
// }


// let obj1 = obj;

// let obj2 = {
//     ...obj1,
//     school:{...obj.school}
// };

// obj2.school.schoolName = "Saylani";

// console.log(obj,obj1,obj2)


//---deep copy V2

// using JSOn.strigify on obj2 and and then parsong it with JSON.parse make the deep copy of the original object in a efficient way
//now there is no need of making new references again and again
//no matter how nested the original object is! 



let obj = {
    name:"Ahmed",
    school:{
        schoolName : "SMIT"
    }
}


let obj1 = obj;

let obj2 = JSON.parse(JSON.stringify(obj1))
    

obj2.school.schoolName = "Saylani";

console.log(obj,obj1,obj2)







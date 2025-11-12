
//with help of spread operator we copied the object and array as well 

//but there are more concept like deep and shallow copy
//lets dive in detail
//when you make 2 copies of object from original one all will share the same reference in memory

//if change one object the same changes reflect back in all 3 objects which is an issue

//but there is a way to make the new object as copy of original 
//without shsring its reference in memory
//this is really helpful as if will prevent the changes tobe reflect in all three objects when we change one
//as in this example obj2 has new reference through help of spread operator(issue gets solved partially)
//this copying method is known as "shallow copy"







let obj = {
    name:"Ahmed"
}



let obj1 = obj

let obj2 = {...obj1}

obj2.name = "Ahad"
console.log(obj,obj1,obj2)







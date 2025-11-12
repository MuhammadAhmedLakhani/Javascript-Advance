
//with help of spread operator we copied the object and array as well 

//but there are more concept like deep and shallow copy
//lets dive in detail
//when you make 2 copies of object from original one all will share the same reference in memory

//if change one object the same changes reflect back in all 3 objects which is an issue






let obj = {
    name:"Ahmed"
}



let obj1 = obj

let obj2 = obj1

obj2.name = "Ahad"
console.log(obj,obj1,obj2)







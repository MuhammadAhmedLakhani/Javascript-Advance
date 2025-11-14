
//OOP is not a javascript function instead it is a modern programmign conscept which is available in many languages
//OOP has 4 pillars:
//1)Inheritance
// 2)Abstraction
//3)Polymorphism
//4)Encapsulation


//---Inheritance
//transfer properties from parent classs to child class
//extends keyword is used for inheriting parent class follllowedby parent class name

//super is called to bring parent properties to child class
//parameter to super is provided only if the parent class has dynamic property(in this example it is school property)


class School{
    constructor(school){
        this.campus = "HeadOffice"
        this.school = school
    }





}




class Student extends School{
    constructor(school ,name,email){
        super(school)
        this.name  = name;
        this.email  = email;

    }


}

let s1 = new Student("Ahad","ahad@gmail.com", "SMIt")

console.log(s1)
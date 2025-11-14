
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


// class School{
//     constructor(school){
//         this.campus = "HeadOffice"
//         this.school = school
//     }





// }




// class Student extends School{
//     constructor(school ,name,email){
//         super(school)
//         this.name  = name;
//         this.email  = email;

//     }


// }

// let s1 = new Student("Ahad","ahad@gmail.com", "SMIt")

// console.log(s1)


//--Abstraction




//means hiding your logic from the user
// user just use the utility(methods) without ever understanding the  background knowledge of the method 
//in example below we are using assignmentInfo method but doesnot its background knowldege so its an abstraction

// class assign {
//     constructor(assignmentName,assignmentDeadline){
//         this.assignmentName = assignmentName;
//         this.assignmentDeadline = assignmentDeadline
//     }
//     assignmentInfo(){
//         return `Your Assignment is: ${this.assignmentName} and its dealine is :${this.assignmentDeadline}  ` 
//     }

// }



// let info = new assign("AttendenceApp","Tommorow")

// console.log(info.assignmentInfo())

//--encapsulation


//it means that  all data related to one topic must be under one class ans encapsule(secured)
//in example below phone key is added which is not encapsulatea ss alll student data is not in one place



// class Student{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
// }



// let s1 = new Student("Ahad","ahad@gmail.com")

// console.log(s1)


// let phone =121212312 
// s1.phone = phone

// console.log(s1)



//---Polymerphism

//same object/array/function behaves differently in different scenerios

//based on different user interaction 



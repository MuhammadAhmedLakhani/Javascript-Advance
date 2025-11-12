

//destructuring allows breaking of object to exteact certain properties


// let students = {

//     s1:{
//         name: "Ahmed",
//         email: "ahmed@gmail.com"
//     },
//     s2:{
//         name: "Ahmed",
//         email: "ahmed@gmail.com"
//     },
//     s3:{
//         name: "Ahmed",
//         email: "ahmed@gmail.com"
//     },
//     s4:{
//         name: "Ahmed",
//         email: "ahmed@gmail.com"
//     },
//     s5:{
//         name: "Ahmed",
//         email: "ahmed@gmail.com"
//     }

// }

// let {s1}  = students

//   inside curly brakets there should be keys of object

// let { name, email } = s1


// console.log(name)
// console.log(email)
// console.log(s1)

// //no need to write student.name again and again

// console.log(students)

//it does not affect original object at all




let student  = {
    name:"Ahmed",
    email:"ahmed@gmail.com",
    classDetails:{
        time:"morning"
    }

}

//destructuring multipple objects
//classDetails is another object which also need to destructure
// default value is used if property value does not present 
//if present then default value donot used


// let {email , name , classDetails} = student
// let {time = "9-11"} = classDetails
// console.log(email)
// console.log(name)
// console.log(time)


// ---deep property
//instead of destructureing classTime property again we did it in one line
//classDetails is destructured at the same time with name and email
//its a deep destructuring as classDetails is itself an object


// let {name , email , classDetails: {time}} = student

// console.log(name)
// console.log(email)
// console.log(time)



// let search = "email";

// //search represents dynamic value

// let {[search]: a} = student;

// //aa is identifies holding dyanamic values of dynamic properties

// console.log(a)


// ---array destructuring


// let a = [122,"Ghous","Ahmed"]

// let [x,y,z] = a
// console.log(a)
// console.log(x)
// console.log(y)
// console.log(z)




//function with parameter is defined but when
// you called it and not pass parameter its is an arror
//but if you set default value of prarameter 
//then default value gets as argument if you donot provide argument when calling function


//  function defaultParam(a){
//     console.log(a,"default")
// }

// defaultParam()

//error produced as no parameter present when function call is made 


// function defaultParam(a = "default value"){
//     console.log(a,"answer")
// }

// defaultParam()


//here no erroe as default value of a is used
// when  actual value not present












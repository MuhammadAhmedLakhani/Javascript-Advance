

//destructuring allows breaking of object to exteact certain properties


let students = {

    s1:{
        name: "Ahmed",
        email: "ahmed@gmail.com"
    },
    s2:{
        name: "Ahmed",
        email: "ahmed@gmail.com"
    },
    s3:{
        name: "Ahmed",
        email: "ahmed@gmail.com"
    },
    s4:{
        name: "Ahmed",
        email: "ahmed@gmail.com"
    },
    s5:{
        name: "Ahmed",
        email: "ahmed@gmail.com"
    }

}

let {s1}  = students

//   inside curly brakets there should be keys of object

let { name, email } = s1


console.log(name)
console.log(email)
console.log(s1)

//no need to write student.name again and again

console.log(students)

//it does not affect original object at all
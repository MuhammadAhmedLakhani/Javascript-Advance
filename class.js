//Constructor function is not supported in ES6 version
//instead class is introduced as a new concept
// /class has a special function called construction function

class student  {

    constructor(name,email){
        this.name = name
        this.email = email
        
        
    }
    
    getEmail() {
        console.log(this.email)
    }

}

let s1 = new student("Ahmed","ahmed@gmail.com ")

s1.getEmail()
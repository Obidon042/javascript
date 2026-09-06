console.log("Hello World")
console.log("Nigeria")
console.log("Sweet Home")
console.log("Africa")
console.log("football")



// Variable Declaration

//let
//var
//const

let name = "John Doe"
console.log(name)

var age = 30
age = 80
console.log(age)

const country = "Nigeria"
console.log(country)




// Data Types

// string
// Number
// Booleans

let state = "Lagos"
console.log(state)

let population = 2000000
console.log(population)

let isCapital = false
console.log(isCapital)




// Arithmetic Operators
let a = 10
let b = 5
console.log(a + b) // Addition
console.log(a - b) //Subtraction
console.log(a * b) // Multiplication
console.log(a / b) // Division
console.log(a % b) // Modulus




// Increase and Decrease
let accountBalance = 1000
let deposit = 700
accountBalance = accountBalance + deposit
let withdrawal = 500
accountBalance = accountBalance - withdrawal
console.log( "$" +accountBalance)


let Age = 30
Age = Age + 1
Age += 1
console.log(Age)




// Getting User Input
let UserName = prompt("Enter your name")
console.log(UserName)
let UserEmail = prompt("Enter your email")
console.log(UserEmail)
let UserAge = prompt("Enter your age")
console.log( "Age: " + UserAge)



// if statement

let studentScore = 65

if(studentScore == 100){
    console.log("Grade A")
    console.log("congratulations")
}else if(studentScore > 60 && studentScore <= 100){
    console.log("Grade B")
}



let amakaId = {
    name: "Amaka",
    age: 25,
    isStudent: true,
    school: "university of lagos",
    courses: ["Mathematics", "physics", "chemistry"]
}

let amakaAge = amakaId.age;
console.log(amakaAge);

let manAge = 100
if(manAge >= 70){
    console.log("old")
}else if(manAge > 40 && manAge <= 100){
    console.log("young")
}else if(manAge > 30 && manAge <= 100){
    console.log("youth")
}

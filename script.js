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



// Arrays
let names = ["Moses", "David", "John", "Amaka",];
let fruits = ["Apple", "Banana", "Orange", "Mango"];
names.push("Mike");
let userValue =prompt("Enter your name");
names.push(userValue);
names.unshift("Jane");
names.pop();
names.shift();
names.splice(2, 1);
console.log(names);
console.log(fruits);
console.log(names[0]);
console.log(names.length);




// Objects
let students = {
    studentName: "Amaka",
    studentAge: 25,
    isStudent: true,
    school: "university of lagos",
    subjects: ["english", "mathematics", "chemistry"],
}

let products = {
    productName: "iphone",
    productPrice: 1000,
    productQuantity: 5,
    isAvailable: true,
    size: ["Small", "Medium", "Large"],
}
console.log(students.studentName);
console.log(products.productName);
console.log(products.size[1]);




// Arrays + Objects
let studentsRecord = [

    {
         studentName: "John",
    studentAge: 35,
    isStudent: true,
    school: "university of nigeria",
    subjects: ["english", "physics", "chemistry"],

    },

      {
         studentName: "Mike",
    studentAge: 28,
    isStudent: true,
    school: "university of jos",
    subjects: ["english", "mathematics", "chemistry"],

      },


      {
         studentName: "Godwin",
    studentAge: 29,
    isStudent: true,
    school: "university of benin",
    subjects: ["english", "mathematics", "chemistry"],

      },


      {
         studentName: "Henry",
    studentAge: 23,
    isStudent: true,
    school: "university of Abuja",
    subjects: ["english", "mathematics", "chemistry"],

      },

]

console.log(studentsRecord.at(2).studentAge)





// Javascript functions

let score = prompt("Enter your score")
function moses(){
    console.log("my first function")

    if(score < 40 && score > 14){
        console.log("you have failed")
    }else if(score < 15){
        console.log("you need to repeat the exam")
    }else{
        console.log("you have passed")
    }
}
moses()


function dataCalulation(gander, age, country){
    console.log("my gander is", gander)
    console.log("I am", age, "years old")
    console.log(country)
}
dataCalulation("male", 50, "Nigeria")



function produtCalculation(quantity, unitPrice){
    let productQuantity = quantity
    let productPrice = unitPrice
    let totalPrice = productQuantity * productPrice

    console.log(totalPrice)
}
produtCalculation(5, 1000)



function additionCalculation(a, b){
    console.log("Addition:", a + b)
}
additionCalculation(10, 5)



function subtractionCalculation(a, b){
    console.log("Subtraction:", a - b)
}
subtractionCalculation(10, 5)


function multiplicationCalculation(a, b){
    console.log("Multiplication:", a * b)
}
multiplicationCalculation(10, 5)


function divisionCalculation(a, b){
    console.log("Division:", a / b)
}
divisionCalculation(10, 5)


function modulusCalculation(a, b){
    console.log("Modulus:", a % b)
}
modulusCalculation(10, 5)





let g = document.getElementsByClassName("world")
let h = document.getElementById("goodbye")
let i = document.querySelector("#hello")
let j = document.querySelector(".yes")

console.log(g)
console.log(h)
console.log(i)
console.log(j)


let k = document.querySelectorAll(".no")
console.log(k)

let u = document.querySelectorAll(".go")
console.log(u [1])

let v = document.querySelector(".ki")
let usersName = "moses"
v.innerHTML = usersName


let m = document.querySelector(".username")
let userName = prompt("Enter your name")
m.innerHTML = userName





let ph = document.querySelector(".us")
let userName1 = "My Name is Obi"
ph.innerHTML = userName1



let bt = document.querySelector(".he")
let userName2 = "My website is www.Obi.com"
bt.innerHTML = userName2

let dt = document.querySelector(".do")
let userName3 = "I live in Lagos"
dt.innerHTML = userName3

let et = document.querySelector(".ol")
let userName4 = "I study at the university of Lagos"
et.innerHTML = userName4

let ft = document.querySelector(".fj")
let userName5 = "I am a software engineer"
ft.innerHTML = userName5







let kl = document.querySelector(".is")
let userName6 = "Viraj Kabbur"
kl.innerHTML = userName6

let lm = document.querySelector(".ik")
let userName7 = "Wannabe Front End Engineer @RealLives "
lm.innerHTML = userName7

let mn = document.querySelector(".yc")
let userName8 = "UI/UX Designer trying to gain empathy for developers. Certified Stack Overflow and ChatGPT developer"
mn.innerHTML = userName8

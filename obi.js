  console.log("Hello World")

  // Array []

  let studentsRecord = [

                  {
         studentName: "John",
    studentAge: 25,
    phoneNumber: 2347067854328,
    schoolName: "university of nigeria",
     courseOfStudy: "english",
     gender: "male",
     profileLink:"https://fontawesome.com/",
    ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpn48U-AA1FxxwTClogVuu2d6ueEjwvQbUa08fLGSPV2LIquWuTHluF8&s=10"

    },

      {
         studentName: "Amaka",
    studentAge: 28,
    phoneNumber: 2347078346790,
    schoolName: "university of jos",
    courseOfStudy: "mathematics",
    gender:   "female",
     profileLink:"https://fontawesome.com/",
     ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpn48U-AA1FxxwTClogVuu2d6ueEjwvQbUa08fLGSPV2LIquWuTHluF8&s=10"

      },


      {
         studentName: "Godwin",
    studentAge: 29,
    phoneNumber: 2348078354179,
    schoolName: "university of benin",
    courseOfStudy: "computer science",
    gender: "male",
    profileLink:"https://fontawesome.com/",
    ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpn48U-AA1FxxwTClogVuu2d6ueEjwvQbUa08fLGSPV2LIquWuTHluF8&s=10"


      },


      {
         studentName: "Henry",
    studentAge: 23,
    phoneNumber: 2349067452390,
    schoolName: "university of Abuja",
    courseOfStudy: "engineering",
    gender: "male",
    profileLink:"https://fontawesome.com/",
    ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpn48U-AA1FxxwTClogVuu2d6ueEjwvQbUa08fLGSPV2LIquWuTHluF8&s=10"

      },


        {
         studentName: "John",
    studentAge: 30,
    phoneNumber: 2348097654317,
    schoolName: "university of ibadan",
    courseOfStudy:"agriculture",
    gender: "male",
    profileLink:"https://fontawesome.com/",
    ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpn48U-AA1FxxwTClogVuu2d6ueEjwvQbUa08fLGSPV2LIquWuTHluF8&s=10"

    },

      {
         studentName: "Mike",
    studentAge: 26,
    phoneNumber: 2347097865390,
    schoolName: "university of ilorin",
    courseOfStudy: "art",
    gender: "male",
    profileLink:"https://fontawesome.com/",
     ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpn48U-AA1FxxwTClogVuu2d6ueEjwvQbUa08fLGSPV2LIquWuTHluF8&s=10"

      },



  ]

  console.log(studentsRecord)

    let st = document.querySelector(".studentsDate")

    studentsRecord.forEach((item) => {
      
        st.innerHTML += `<h1>${item.studentName}</h1>`
        st.innerHTML += `<h3>${item.studentAge}</h3>`
        st.innerHTML += `<h2>${item.gender}</h2>`
        st.innerHTML += `<p>${item.schoolName}</p>`
        st.innerHTML += `<h3>${item.phoneNumber}</h3>`
        st.innerHTML += `<h2>${item.courseOfStudy}</h2>`
        st.innerHTML += `<button>${item.profileLink}</button>`
        st.innerHTML += `<img src="${item.ImageUrl}" width="200px"/>`


    })





  let com = document.querySelector(".studentsName")

let listsOfNames = [
    "Amaka",
    "John",
    "Obi",
    "Jude",
    "David",
    "Lilian",
    "Mary",
    "Anita",
    "Anneth",
    "Kemmy",

]

// Array method

// forEach
// filter
// map
// sort

console.log(listsOfNames)
com.innerHTML = "<h1>Josua</h1>"

listsOfNames.forEach(function(item){
    console.log(item)
   com.innerHTML += `<h1>${item}</h1>`
})

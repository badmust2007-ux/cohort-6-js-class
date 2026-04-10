let obj = {
    name: "Esther",
    age: 25,
    profession : "Developer",
}
let student = { 
    name: "Ngozi Adeyemi",
    age: 21,
    Department: "Computer Science",
    isEnrolled: true
};
console.log(student.name)
console.log(student["name"])


let employee = {
    name: "Tunde Balogun",
    role: "Frontend Deeloper",
    salary: 450000,
    city: "Lagos"
};

let newName = employee.name
let newRole = employee.role 

const {name  , salary } = employee
console.log(name)
console.log(salary)


let course = {
    csc401: "Data Structure",
    csc402: "Algorithms",
    csc403: "Operating System",
    csc404: "Database System",
}

let {csc401 : csc400} = course
console.log(csc400)




let person = {
    name: "Amina",
    opay: true,
}
console.log(person)
let {opay: palmpay , name : myName} = person
console.log(palmpay)
console.log(myName)



let profile = { name: "Ada", age: 22};

// copy and add new properities
let updatedProfile = {
    ...profile,
    city: " Abuja"
};

console.log(updatedProfile);

// const { nombre, ...rest } = {
//   nomber: "Emeka", 
//   age: 25,
//   city: "Lagos"
// };

// console.log(nombre); // "Emeka"
// console.log(rest);
// // { age: 25, city: "Lagos" }

const user = {
    name: "Esther",
    password: "12345",
    isFemale: true,
    city: "Lagos",
    age: 25
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

//for in 
for (let key in user) {
    console.log("these are the key : " + key)
    console.log("these are the values : " + user[key]);

}


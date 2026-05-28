
//length of a string
let stringText = "This is a class on string methods"
console.log(stringText.length)


//toUpperCase and toLowerCase
let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText.toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)

//trim , trimStart and trimEnd
let str = "   Hello, World!   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd() //camel casing  
let end_trimmed_str = str.trimEnd() // snake casing
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)
console.log(end_trimmed_str)

let signupName = " Esther"
let signinName = "Esther"

if((signupName.trim()) === signinName){
    console.log("Welcome back, Esther!")
}else {
    console.log("Invalid login information")
}

//indexOf and includes
let user_email = "ogbuuzoma413@techcrush@gmail.com"
let email_index = user_email.indexOf("@") // return datatype : number
console.log(email_index)

let email_contains_at = user_email.includes("@") // return datatype : boolean
console.log(email_contains_at)


//startsWith and endsWith
let userName = "techCrush Esther 6"
let starts = userName.startsWith("techCrush") // return datatype : boolean
console.log(starts)

let ends = userName.endsWith("6") // return datatype : boolean
console.log(ends)

//slice and substring
let testString = "my name is Esther! "
let slicedString = testString.slice(0, 10)
let substringString = testString.substring(0, 10)
console.log(slicedString)
console.log(substringString)

//replace and replaceAll
let text = "Esther is a techie. Esther loves coding and Esther loves teaching"
let replacedText = text.replace("Esther", "She") 
let replacedAllText = text.replaceAll("Esther", "She")
console.log(replacedText)
console.log(replacedAllText)

//split
const sentence = "LANGUAGES: JavaScript, Python, Java, C++"
let splitSentence = sentence.split(" ") // return datatype : array
console.log(splitSentence)
let example = "she is a girl , she is a teacher, she is eating"
console.log(example.split("she"))
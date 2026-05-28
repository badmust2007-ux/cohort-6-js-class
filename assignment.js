const str = "Nigeria is awesome";
const country = str.substring(0, 7);
const awesomeWord = str.slice(11);
const isWord = str.slice(8, 10)
const names = "John,Jane,Doe";
const nameArray = names.split(",");
console.log(nameArray);
const joinedNames = nameArray.join(" ");
console.log(joinedNames);
const path = "/user/home/docs";
const pathArray = path.split("/");
console.log(pathArray);
const homeFolder = pathArray[2];
console.log(homeFolder);

const email = "user@example.com";
const username = email.split("@")[0];
console.log(username);
const isCom = email.endsWith(".com");
console.log(isCom);
const replacedEmail = email.replace("@", "AT");
console.log(replacedEmail);
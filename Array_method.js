// given the array below:
const numbers = [2, 4, 6, 8, 10];
numbers.forEach(function(nun) {
    console.log(nun * 2);
} );
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(function(name) {
    console.log("Hello " + name + "!");
})
let numbers2 = [1, 2, 3, 4, 5,]; 
const squaredNumbers = numbers2.map(function(num) {
    return num * num;
});
console.log(squaredNumbers);
const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);
const number = [5, 12, 8, 20, 3];
const results = number.filter(num => num > 10);
console.log(results);
const age = [15, 22, 17, 30, 18];

const adults = age.filter(age => age >= 18);
console.log(adults);
const numbers4 = [10, 15, 20, 25, 30];

const result = numbers4 
    .filter(num => num > 20)  // keep nuers greater than 20
    .map(num => num * 2);    // double them 
 

console.log(result);

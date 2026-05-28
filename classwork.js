//using  the map methd , creat a new arry where each number is double
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});     
console.log(doubledNumbers);
// return scores grater than or equal to 300
const scores = [250, 300, 350, 400, 450];
const mappedScores = scores.filter(function(score) {
    return score >= 300;
});
console.log(mappedScores);
// get me the sum of all item 
const items = [2000, 3000, 400, 100, 600];
const total = items.reduce(function(sum, item) {
    return sum + item;
}, 0);
console.log(total);
// add "green" to the end of the array and remove "red" from the array
const colors = ["red", "blue", "yellow"];
colors.push("green")
colors.shift()
console.log(colors)


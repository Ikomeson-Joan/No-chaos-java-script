const prompt = require("prompt-sync")();

let word = prompt("Enter a word: ")
let lengthOfWord = word.length
let count = lengthOfWord - 1

while (count >= 0){

console.log(word[count])

count -= 1

}
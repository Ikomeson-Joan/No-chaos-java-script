const prompt = require("prompt-sync")();

let word = prompt("Enter a word: ")

let count = 0

while (count < word.length){

let character = word[count]

if (count % 2 == 0){

console.log(character)

}

count += 2

}
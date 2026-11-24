const prompt = require("prompt-sync")();

let word = prompt("Enter a word: ")
let reversedWord = ""
let lengthOfWord = word.length
let count = lengthOfWord - 1

while (count >= 0){

reversedWord += word[count]
count -= 1

}

if (word === reversedWord){
console.log(word + " is a palindrome")
}

else{
console.log(word + " is not a palindrome")
}
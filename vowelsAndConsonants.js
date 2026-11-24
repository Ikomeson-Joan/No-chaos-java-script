const prompt = require("prompt-sync")();

let word = prompt("Enter a word: ")

let count = 0
let numberOfVowels = 0
let numberOfConsonants = 0
let vowelSample = "aeiou"


while (count < word.length){

let character = word[count]
let isVowel = false
let counter = 0


while (counter < vowelSample.length){

if (character === vowelSample[counter]){

isVowel = true
break

}

counter += 1
}

if (isVowel){
numberOfVowels += 1
}
else{
numberOfConsonants +=1
}

count += 1

}

console.log("Number of vowels is " + numberOfVowels)
console.log("Number of consonants is " + numberOfConsonants)
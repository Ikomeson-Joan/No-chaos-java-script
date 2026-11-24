const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number or -1 to end: "))
let total = 0
let counter = 0

while (number != -1){

total += number 
counter += 1
average = total / counter
console.log("Average is " + average)

number = Number(prompt("Enter a number or -1 to end: "))

}



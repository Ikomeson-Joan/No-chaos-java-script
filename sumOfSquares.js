


let number = 234
let sumOfSquares = 0
let digit = 1

while (digit <= 3){

sumOfSquares = sumOfSquares + ((number % 10) * (number % 10))
number = (number - (number % 10))/10
digit += 1

}

if (sumOfSquares === number){
console.log(sumOfSquares)
}
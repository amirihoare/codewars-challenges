// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

function divisibleBy(numbers, divisor){
  let divisibleNumbers = []
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % divisor === 0) {
      divisibleNumbers.push(numbers[i])
    }
  }
  return divisibleNumbers
}
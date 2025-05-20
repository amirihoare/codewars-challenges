// =====================================
// 🔁 Loops and Conditionals
// =====================================

// While loop
let result = 1;
let counter = 0;
while (counter < 3) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

// Triangle output with for loop
for (let number = "#"; number <= "##########"; number += "#") {
  console.log(number);
}

// FizzBuzz - attempt 1 (with flawed logic)
for (let number = 1; number <= 100; number += 1) {
  console.log(number);
  if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  }
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  }
}

/* On my second attempt, I first checked for numbers divisible by both 3 and 5 to print "FizzBuzz," then for 3 to print "Fizz," then for 5 to print "Buzz." If none applied, I printed the number. I realized there’s a sort of "order of operations" here—figuring it out was fun! */

// FizzBuzz - corrected logic
for (let number = 1; number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}


// =====================================
// 📊 Math Functions
// =====================================

console.log(Math.floor(Math.random() * 50)); // Random number
console.log(Math.ceil(43.8)); // Round up
console.log(Number.isInteger(2017)); // Check integer


// =====================================
// 🌡️ Temperature Conversion
// =====================================

const kelvin = 300;
let celsius = kelvin - 273;
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature ${celsius} degrees Celsius.`);
console.log(`The temperature ${fahrenheit} degrees Fahrenheit.`);



// =====================================
// 🐶 Dog Years Calculator
// =====================================

/*Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/
let humanAge = 23;
if (humanAge < 0) {
  console.log("Age cannot be negative.");
} else {
  //first two years of human life
  let earlyYears = 2
  //first 2 years in dog years
  earlyYears *= 10.5
  
  /*Avoids unnecessary calculations when the age is less than 2,
  as these years are already accounted for.
  */
  let laterYears = humanAge > 2 ? humanAge - 2 : 0
  //each year after first two years equates to 4 dog years
  laterYears *= 4

  let myAgeInDogYears = earlyYears + laterYears;
  let myName = "Amiri".toLowerCase();
  console.log(`My name is ${myName}. I am ${humanAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
}

// =====================================
// 🔘 Ternary Operators
// =====================================

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


// =====================================
// 🟨 Switch Statement
// =====================================

let athleteFinalPosition = 'whatevs';

switch (athleteFinalPosition) {
  case "first place" : 
    console.log("You get the gold medal!");
    break;
  case "second place" :
    console.log("You get the silver medal!");
    break;
  case "third place" :
    console.log("You get the bronze medal!");
    break;
  default :
    console.log("No medal awarded.");
    break;
}


// =====================================
// 🐄 Farm Inventory Functions
// =====================================

/* We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.

007 Cows
011 Chickens
*/
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
      cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
      chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
  }
  
  function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
      string = "0" + string;
    }
    return string;
  }
  
  function printFullFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
  }
  
  printFarmInventory(7, 11);
  printFullFarmInventory(7, 16, 3);


// =====================================
// 🧱 Object-Oriented Practice
// =====================================

const account = {
    name: "Alex",
    balance: 0,
    credit(value) {
      this.balance += value;
      return this.balance;
    },
    describe() {
      return `Owner: ${this.name}, balance: ${this.balance}`;
    }
  };
  console.log(account.credit(200));
  console.log(account.describe());


// =====================================
// 📚 Array Methods and Practice
// =====================================

/* A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
 */

let musketeers = ["Athos", "Porthos", "Aramis"];
musketeers.push("D'Artagnan");
musketeers.splice(2, 1);

musketeers.forEach(musketeer => {
  console.log(musketeer);
});

const values = [3, 11, 7, 2, 9, 10];
values.push(22);
let max = values[0];
values.forEach(value => {
  if (value > max) {
    max = value;
  }
});
console.log(max);


function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b))
}
let arr = [5, 3, 8, 1]
arr.push(2)
let filtered = filterRange(arr, 1, 5)

console.log(filtered)
console.log(arr)

// filter method
// The n is essentially a "placeholder" that represents "the current element we're looking at" as the method loops through the array.
function returnEvens(nums) {
    return nums.filter(n => n % 2 === 0)
  }
  console.log( returnEvens([1,2,3,4,5,6,7,8,9,10]) )


  // .map to names
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith

// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.
function findAverage(array) {
  return array.length > 0 ? array.reduce((a, b) => a + b, 0) / array.length : 0
}
  
// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
  let monkeys = []
   for(let i = 1; i <= n; i++) {
      monkeys.push(i)
    }
   return monkeys
}

/* Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same. 

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3] */
function distinct(a) {
  return [... new Set(a)];
}

/* A <Set> in js is a special object that only keeps unique values.
So when you pass an array to <new Set(a)>, it automatically removes duplicates. 

The <...> is a spread operator. It "spreads" the elements of the set back into a new array.
So: [...Set {1, 2, 3}] → [1, 2, 3].*/


// Find the mean (average) of a list of numbers in an array.
function findAverage(nums) {
  let sum = nums.reduce((acc, c) => acc + c, 0)
  return sum / nums.length
}

let nums = [1,3,5,7]

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// function sum (numbers) {  
//   let sum = 0
//   for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   return sum
// }

const sum = (numbers) => numbers.reduce((acc, c) => acc + c, 0)


/* You get an array of numbers, return the sum of all of the positives ones.
Example
[1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

Note
If there is nothing to sum, the sum is default to 0. */

// function positiveSum(arr) {
//   return arr.reduce((acc, c) => acc + (c > 0 ? c : 0), 0)
// }

function positiveSum(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum
}

/* Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9. */
function squareSum(numbers){
  let sum = 0
  for(let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2)
  }
  return sum
}

/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example (Input => Output):

35231 => [1,3,2,5,3]
0     => [0]
*/
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
let result = 1;
let counter = 0;
while (counter < 3) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

//triangle output
for (let number = "#"; number <= "##########"; number += "#" ) {
	console.log(number)
}

// fizzbuzz try
for (let number = 1; number <= 100; number += 1) {
	console.log(number)
  if (number % 3 == 0) {
  	console.log("Fizz")
  } else if (number % 5 == 0) {
  	console.log("Buzz")
  }
  if (number % 3 == 0 && number % 5 == 0) {
  	console.log("FizzBuzz")
  }
}
/* I wrote a program to print numbers from 1 to 100, replacing multiples of 3 with "Fizz," multiples of 5 with "Buzz," and multiples of both with "FizzBuzz." It worked—sort of. "Fizz", "Buzz", and "FizzBuzz" were all in the right places but instead of replacing the numbers, it printed the words alongside them. I got stuck figuring out how to fully replace the values.  */

//fizzbuzz second try
for (let number = 1; number <= 100; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz")
    } else if (number % 3 == 0) {
        console.log("Fizz")
    } else if (number % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}
/* On my second attempt, I first checked for numbers divisible by both 3 and 5 to print "FizzBuzz," then for 3 to print "Fizz," then for 5 to print "Buzz." If none applied, I printed the number. I realized there’s a sort of "order of operations" here—figuring it out was fun! */

//random number generator
//Math.floor => Returns the largest integer less than or equal to the input. (makes the value a whole number)
//Math.random() * 50 => tells the computer to find a number between 0 and 50
console.log(Math.floor(Math.random() * 50));

//Math.ceil => always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(43.8)) //=> 44

//Number.isInteger => Determine whether the passed value is an integer.
console.log(Number.isInteger(2017))


//** Temperature conversions => k to c to f **

//today's unchanging forecast of 293 degrees kelvin
const kelvin = 300
//conversion => kelvin to celsius
let celsius = kelvin - 273
//conversion => celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32

//round down converted fahrenheit value
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature ${celsius} degrees Celsius.`)
console.log(`The temperature ${fahrenheit} degrees Fahrenheit.`)


//** Calculating my age in dog years
/*Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/

//Create a variable with a value that is my age
let humanAge = 23
if (humanAge < 0) {
  console.log("Age cannot be negative.")
  return
}
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

//converted dog age values from earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears

let myName = "Amiri".toLowerCase()
console.log(`My name is ${myName}. I am ${humanAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


// Ternary operator (?)
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') :
console.log('You will not need a key to open the door.')

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!')

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")


// The "switch" keyword
let athleteFinalPosition = 'whatevs';

switch (athleteFinalPosition) {
  case "first place" : 
    console.log("You get the gold medal!")
    break

  case "second place" :
    console.log("You get the silver medal!")
    break

  case "third place" :
    console.log("You get the bronze medal!")
    break
  
  default :
    console.log("No medal awarded.")
    break
}


/* We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.

007 Cows
011 Chickens
*/
// 1st way
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
printFarmInventory(7, 11);

// 2nd way
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);


// *Array practice*
let musketeers = ["Athos", "Porthos", "Aramis"]
musketeers.push("D'Artagnan")
musketeers.splice(2, 1)

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i])
}

// During execution, each array element is passed as a parameter (named musketeer in this example) to the anonymous function associated to forEach().
musketeers.forEach(musketeer => {
  console.log(musketeer)
})

//practice #2 - forEach method
// const values = [3, 11, 7, 2, 9, 10]
// let sum = 0

// values.forEach(value => {
//   sum += values
// })
// console.log(sum)

//practice #2 - for method
// const values = [3, 11, 7, 2, 9, 10]
// let sum = 0

// for (let i = 0; i < values.length; i++) {
//   sum += values[i]
// }
// console.log(sum)

//practice #3 - forEach method
const values = [3, 11, 7, 2, 9, 10]
values.push(22)
let max = values[0]

values.forEach(value => {
  if (value > max) {
    max = value
  }
})
console.log(max)


// *Objects Practice*
// const xavier = {
//   name: "Xavier",
//   health: 200,
//   strength: 50,
//   xp: 0
// }

// function describe(character) {
//   return `${character.name} has ${character.health} health points, ${character.strength} as strength and ${character.xp}XP points`
// }
// console.log(describe(xavier))

// Task: Modeling a dog
// TODO: create the dog object here
// const dog = {
//   name : "Hunter",
//   species : "german-shepard",
//   size : "not a clue",

//   bark() {
//     return `I am ${dog.name}. And I am a ${dog.species}.`
//   }

// }
// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}.`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Task : Modeling a circle
// radius value from **USER INPUT**
// const r = Number(prompt("Enter the circle radius:"))

// // TODO: create the circle object here
// let circle = {
//   radiusSqr : r * r,

//   circumference() {
//     return 2 * Math.PI * r
//   },

//   area() {
//     return Math.PI * this.radiusSqr
//   }
// }

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);


// Task : Modeling a bank account
const account = {
  name: "Alex",
  balance: 0,

  credit(value) {
    this.balance += value
    return this.balance
  },

  describe() {
    return `Owner: ${this.name}, balance: ${this.balance}`
  }
}
console.log(account.credit(200))
console.log(account.describe())


// *Replace vowels with "!"
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}
console.log(replace("Johnny"))

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

// Array methods practice
let str = ["my-short-string"]

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// .filter
// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b))
// }
// let arr = [5, 3, 8, 1]
// arr.push(2)
// let filtered = filterRange(arr, 1, 5)

// alert(filtered)
// alert(arr)

// Sort in decreasing order
let arr = [5, 2, 1, -10, 8]

arr.sort((a, b) => b - a)

alert (arr)

// Removing all "!" from the end of a sentence
function remove (string) {  
  return string.replace(/!+$/, '');
}


// Array Practice - WESOBOS course
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving', 'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano', 'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter (inventor => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
      return true
      }
  })
  console.table(fifteen)
  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

  console.log(fullNames)

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

  console.table(ordered)

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
  const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year)
  }, 0)

  console.log(totalYears)

  // 5. Sort the inventors by years lived
  const oldest = inventors.sort(function (a, b) {
      const lastGuy = a.passed - a.year
      const nextGuy = b.passed - b.year
      return lastGuy > nextGuy ? -1 : 1
  })
  console.table(oldest)

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ')
      const [bLast, bFirst] = nextOne.split(', ')
      return aLast > bLast ? 1 : -1
  })
  console.log(alpha)

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function checkFirstAndLast(array) {
  if (array[0] < array[array.length - 1]) {
      alert("Hi")
  } else if (array[0] > array[array.length - 1]) {
      alert("Bye")
  } else {
      alert("We close in an hour")
  }
}

//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
// forEach method
function returnEvenNums(nums) {
  let evenNums = []

  nums.forEach(n => {
    if (n % 2 === 0) {
      evenNums.push(n)
    }
  })
  return evenNums
}
console.log(returnEvenNums([1,2,3,4,5,6,7,8,9,10]))

// filter method
// The n is essentially a "placeholder" that represents "the current element we're looking at" as the method loops through the array.
function returnEvens(nums) {
  return nums.filter(n => n % 2 === 0)
}
console.log( returnEvens([1,2,3,4,5,6,7,8,9,10]) )

// for method
function returnOddNums(nums) {
  let oddNums = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      oddNums.push(nums[i])
    }
  }
  return oddNums
}
console.log(returnOddNums([1,2,3,4,5,6,7,8,9,10]))

/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55. */

function returnRangeArray(start, end) {
  let arr = []

  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}
console.log( returnRangeArray(1, 10) )


function sumOfArray(array) {
  let sum = 0

  array.forEach(n => {
    sum += n
  })
  return sum
}
console.log( sumOfArray(returnRangeArray(1, 10)) )


// sort()
let arr = [5, 2, 1, -10, 8]

arr.sort((a, b) => b - a)
alert(arr)


let arr = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted()
arr.unshift("Test")
arr.shift("")
arr.push("Python")
arr.pop()

function copySorted() {
  return arr.sort()
}
console.log(sorted)


// .map to names
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = users.map(item => item.name)

console.log( names )



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


/* You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers. 

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned. */

function calculator(a,b,sign){
  if(sign != "+" && sign != "-" && sign != "*" && sign != "/") return "unknown value"
  if(isNaN(a) || isNaN(b)) return "unknown value"
  if(sign === "+") return a + b
  if(sign === "-") return a - b
  if(sign === "*") return a * b
  if(sign === "/") return a / b
}

/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element . */

function addLength(str){
  return str.split(" ").map(s => `${s} ${s.length}`)
}

// or
function addLength(str) {
  var split = str.split(" ");
  var result = [];
   
  for (i = 0; i < split.length; ++i) {
    result.push(split[i] + " " + split[i].length);
  } 
  return result;  
}

/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not. */
// for method
function check(a,x){
  var result = false;
  for(i = 0; i < a.length; i++){
    if(a[i]==x){
    result  = true;
    }
   
  }
  return result;
};
check([1, "hey", false], 1);

// .includes method
const check = (a, x) => a.includes(x) ? true : false

// .includes method2
function check(a,x) {
  return a.includes(x)
}

// Note: target ="_blank" -> this takes a link to a new tab.


let arr = ["HTML", "JavaScript", "CSS"]

let sorted = copySorted(arr)

function copySorted(arr) {
  return arr.slice().sort()
}

alert(sorted)
alert(arr)

// sort users by age
// function sortByAge(users) {
//   arr.sort((a,b) => a.age -b.age)
//   console.log(arr)
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now sorted is: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// find the avarage age of users
const getAverageAge = users => users.reduce((a,b) => a + b.age, 0) / users.length

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

console.log(getAverageAge(arr))


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
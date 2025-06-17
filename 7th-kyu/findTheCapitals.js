// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript


var capitals = function (word) {
  let indices = []
	let splitWordArray = word.split('')
  
  splitWordArray.forEach((letter, index) => {
    if( letter == letter.toUpperCase() && letter !== letter.toLowerCase() ) {
       indices.push(index)
       }
  })
  
  return indices
};
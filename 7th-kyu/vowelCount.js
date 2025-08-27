// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  // take in string
  
  // read each letter of the string looking for the vowels
  
  // return a count of the vowels found
  
  // if no vowels return 0
  
  let vowels = 'aeiou'
  let count = 0
  
  for (let char of str) {
    if(vowels.includes(char)) {
      count++
    }
  }
  
  return count;
}
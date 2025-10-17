// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"

// NOTE: All numbers will be whole numbers greater than 0.


// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript


function expandedForm(num) {
  return String(num)
    .split('')
    .map((digit, index, arr) => {
      const zeros = arr.length - index - 1;
      return digit !== '0' ? digit + '0'.repeat(zeros) : '';
    })
    .filter(Boolean)
    .join(' + ');
}
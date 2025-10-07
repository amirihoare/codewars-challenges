// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript



function uniqueInOrder(sequence) {
  const result = [];
  let previous;

  for (const item of sequence) {
    if (item !== previous) {
      result.push(item);
      previous = item;
    }
  }

  return result;
}
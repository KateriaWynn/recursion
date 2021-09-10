/** product: calculate the product of an array of numbers. */

// [2, 3, 4]
// get the first number -> nums[i]
// use recursion -> call product(nums, i + 1)
// add steps one and two together
// return nums[i] + product(nums, i + 1)

// stop when you get to the last number
// arr.length -> the number of elements -> 3
// i = 3 -> if(i === nums.length) return 1;
// return 1 because using 0 when multiplying anything would make the solution 0

function product(nums, i = 0) {
  // base case
  if (i === nums.length) return 1;

  // normal case
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

// Function longest takes a words arr, starts the index at 0, and has a var for tracking the longest word set to 0. The function keeps running using the same words arr, goes to the next element by adding 1 to the index, and using the updated value that var for tracking the longest word has.
// The var for tracking the longest word will compare the length of a word against the value in the var for tracking the longest word. Math.max returns the largest number.
// Base returns the number in the tracker if the index and the length of words are equal indicating all elements have been reviewed

function longest(words, i = 0, longestSoFar = 0) {
  if (i === words.length) return longestSoFar;

  longestSoFar = Math.max(words[i].length, longestSoFar);

  return longest(words, i + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

// h e l l o -> getting the even indexes
// always start at 0
// str, index starting at 0, var to track the new string
// return func call using the same str, index + 2, the tracker
// base case is if the index is >= str.length
// hello.length = 5;
// 0, 2, 4, 6 -> need to use >= because odd numbers will be skipped
// add the letter each time to the variable and reassign

function everyOther(str, i = 0, newStr = '') {
  if (i >= str.length) return newStr;

  newStr += str[i];

  return everyOther(str, i + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// this means reads the same forward and backwards
// two checks
// check if the length of the string is the same counting from both sides meeting in the middle
// if they don't match in the middle then return false
// return the func call iterating using the same str

// 0 1 2 3 4 5 6
// t a c o c a t
// L           R
// 1 2 3 4 3 2 1

function isPalindrome(str, i = 0) {
  let left = i;
  let right = str.length - i - 1;

  if (left >= right) return true;
  if (str[left] !== str[right]) return false;

  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // if we are at the end of the arr nothing was returned previously so assume nothing is found
  if (i === arr.length) return -1;
  // base case
  if (arr[i] === val) return i;

  // normal case
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */
// porcupine

function revString(str, i = 0, reverseStr = '') {
  if (reverseStr.length === str.length) return reverseStr;

  reverseStr += str[str.length - 1 - i];

  return revString(str, i + 1, reverseStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') stringArr.push(obj[key]);
    if (typeof obj[key] === 'object')
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};

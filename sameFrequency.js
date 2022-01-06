// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (int1, int2) => {
  let array1 = int1.toString().split("");
  let array2 = int2.toString().split("");
  if (array2.length != array1.length) return false;
  let obj__int1 = {};
  //   let obj__int2 = {};
  //   console.log(array1);
  for (let i = 0; i < array1.length; i++) {
    let tracker = array1[i];
    obj__int1[tracker] ? (obj__int1[tracker] += 1) : (obj__int1[tracker] = 1);
  }
  for (let j = 0; j < array2.length; j++) {
    let second_tracker = array2[j];
    if (!obj__int1[second_tracker]) return false;
    obj__int1[second_tracker] -= 1;
  }
  return true;
};

// console.log((123).toString().split(""));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(34, 14));

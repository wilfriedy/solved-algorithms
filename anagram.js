// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let counter__obj1 = {};
  for (let i = 0; i < str1.length; i++) {
    let each__letter = str1[i];
    counter__obj1[each__letter]
      ? (counter__obj1[each__letter] += 1)
      : (counter__obj1[each__letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let track__letter = str2[i];
    if (!counter__obj1[track__letter]) return false;
    counter__obj1[track__letter] -= 1;
  }
  return true;

  //   console.log(counter__obj1);
}

console.log(validAnagram("app", "pap"));

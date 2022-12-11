function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("")
  if (reversed === word) {
    return true
  } else {
    return false
  }
}
/* 
  Add your pseudocode here
  check if string is the same as reversed string
  compare reversed word to word
  return outcome

*/

/*
  Add written explanation of your solution here
  Used split() to split string into an array of string
  reverse to reverse the order of elements in array
  If else statement to give the outcome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

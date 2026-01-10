// Features:
// Reverse string
// Count vowels
// Palindrome check

function stringUtility(str) {
  return {
    reverse: str.split("").reverse().join(""), // reverse
    vowelCount: countVowels(str),  // count vowels
    isPalindrome: isPalindrome(str)  // palindrome 
  };
}

console.log(stringUtility("madam"));
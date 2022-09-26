// Assignment Code

// All 4 arrays needed for password generator


// Lowercase Characters 
var lowCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase Characters
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Numeric Characters 0-9
var numericChar = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"];

// Special Characters
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var generateBtn = document.querySelector(“#generate”);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(“#password”);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener(“click”, writePassword);


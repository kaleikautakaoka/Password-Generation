// Assignment Code

// All 4 arrays needed for password generator


// Lowercase Characters 
var lowCaseChar = ["a", "b",];

// Uppercase Characters
var upperCaseChar = ["A", "B",];

// Numeric Characters 0-9
var numericChar = ["0", "1",];

// Special Characters
var specialChar = ["!", "@",];

var generateBtn = document.querySelector(“#generate”);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(“#password”);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener(“click”, writePassword);


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = window.prompt("Password length?")

  var pwdLength = parseInt(userInput)

  if (isNaN(pwdLength)) {
    window.alert ("invalid")
    return
  }
  if (pwdLength < 8 || pwdLength > 110) {
    window.alert("Must be between 8 - 110 characters")
    return
  }
}

var wantNumbers = window.confirm("Include Numbers?")
var specialChars = windows.confirm("Include Special Characters?")
var lowerChars = windows.confirm("Include Lower Case Letters?")
var UpperChars = windows.confirm("Include Upper Case Letters?")

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "`", "-", "="]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var combinedVar = []

for (var i = 0; i < lowerChars.length; i++) {
  upperChars[i] = lowerChars[i].toUpperCase()
}

if (wantNumbers === true) {
  combinedVar.push(numbers)
}

if (specialCharacters === true) {
  combinedVar.push(symbols)
}

if (lowerChars === true) {
  combinedVar.push(lowercase)
}

if (upperChars === true) {
  combinedVar.push(uppercase)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

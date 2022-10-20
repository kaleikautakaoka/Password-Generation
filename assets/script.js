// Assignment Code
var generateBtn = document.querySelector("#generate");

//Random number between min and max (if max is unidentified then give the value between min and 0)
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0 
  }
  var rdm = Math.random()
  return Math.floor(min*(1-rdm) + rdm*max)
}

//return random interger from a list
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

//generates random set of characters meeting certian length and type of character settings set by user
function generatePwd() {
   //prompts user to enter how long they want their password to be
   var userInput = window.prompt("Enter password length (Between 8 - 110 characters)")
   var passwordLength = parseInt(userInput)
   if (isNaN(passwordLength)) {
    window.alert("Please enter a number")
    return
   }
   
  var userSelection = window.prompt(message)
  var isValid
}

var inputObject = {
  canceled: userInput === null
}

if (inputType === "numbers") {
  userInput
}
while (true) {
  var userInput = window.prompt("Password length?")

if (userInput === null) {
  return
}
//prompt the user to choose the length of the password
function promptUserForInputType(inputType, message, isValidCondition) {
  var pwdLength = parseInt(userInput)

  if (isNaN(pwdLength)) {
    window.alert ("invalid")
    return
  }
  else if (pwdLength < 8 || pwdLength > 110) {
    window.alert("Must be between 8 - 110 characters")
  } else {
    break
  }
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

if (combinedVar.length === 0) {
  combinedVar.push(lowercase)
}

var generatedPwd = ""

for (var i = 0; i < pwdLength; i++) {
  var rdmList = getRandomItem(combinedVar)
  var rdmChar = getRandomItem(rdmList)
  generatedPwd += rdmChar
}
return generatedPwd

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
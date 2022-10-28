// Assignment Code
var generateBtn = document.querySelector("#generate");

//Random number between min and max (if max is unidentified then give the value between min and 0)
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0 
  }
  var rdm = Math.random();
  return Math.floor(min*(1-rdm) + rdm*max)
}

//return random interger from a list
function getRandomItem(list) {
return list[randomInt(list.length)]
}

//generates random set of characters meeting certian length and type of character settings set by user
function generatePwd() {
   //prompts user to enter how long they want their password to be
   var personInput = window.prompt("Enter password length (Between 8 - 110 characters)")
   var lengthOfPassw = parseInt(personInput)
   //if the password length result isn't an interger then return this string below
   if (isNaN(lengthOfPassw)) {
    window.alert("Please enter a number")
    return
   }

   //if answer to lengthOfPassw is not with 8 and 110 characters return string below to alert user to add more variables
   if (lengthOfPassw < 11 || lengthOfPassw > 110) {
    window.alert("Password must be between 8 and 110 characters")
    return
   }
  //Prompts for user to select options they want in their password
   var numberOptions = window.confirm("Include Numbers?")
   var specialsOptions = window.confirm("Include Special Characters?")
   var smallLetterOptions = window.confirm("Include Lower Case Letters?")
   var largeLetterOptions = window.confirm("Include Upper Case Letters?")

   //arrays for character types
   var arrayWithNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
   var arrayWithSymbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "`", "-", "="]
   var arrayWithLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   var arrayWithUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   //array to combine all the variables 
   var variablesCombined = []

   //the next four "if" conditions added so that any given array option can be added based on user selection

if (numberOptions === true) {
  variablesCombined.push(arrayWithNumbers)
}

if (specialsOptions === true) {
  variablesCombined.push(arrayWithSymbols)
}

if (smallLetterOptions === true) {
  variablesCombined.push(arrayWithLowerCase)
}

if (largeLetterOptions === true) {
  variablesCombined.push(arrayWithUpperCase)
}

//if characters have not been selected this prompt/windowalert will appear
if (variablesCombined.length === 0) {
  window.alert("Please make a character selection")
  return
}

var generatedPwd = ""

//random generation of variables
for (var i = 0; i < lengthOfPassw; i++) {
  var completelyRdmList = getRandomItem(variablesCombined);
  var completelyRdmSpecChar = getRandomItem(completelyRdmList);
  generatedPwd += completelyRdmSpecChar
}
return generatedPwd
}

// Display password to input
function writePassword() {
  var pwd = generatePwd(11, 110);
  var passwordText = document.querySelector("#password");

  passwordText.value = pwd;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
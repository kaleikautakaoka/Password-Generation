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

var generateBtn = document.querySelector("#passowrd");

// Write password to the #password input
function writePassword() { var UserInput = getInput()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(Uppercase, Lowercase, Numbers, SpecialCharacters) 
{
  let charCodes = LOWERCASE_CHAR_CODES
  if (Uppercase) charCodes = charCodes.concat
  (UPPERCASE_CHAR_CODES)
  if (SpecialCharacters) charCodes = charCodes.concat
  (SPECIALCHARACTERS_CHAR_CODES)
  if (Numbers) charCodes = charCodes.concat
  (NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() *
      characterAmount)]
  passwordCharacters.push(String.fromCharCode(characterCode))
  }
   return passwordCharacters.join()
}

function getInput() {
  var characterAmount = parseInt(prompt("Select Amount of Characters(between 8-128)"))
  if (characterAmount === NaN){
    alert("please use a valid input")
    getInput()
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


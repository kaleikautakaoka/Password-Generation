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



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

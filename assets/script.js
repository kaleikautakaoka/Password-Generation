// const added to link html elements and java
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const UppercaseElement = document.getElementById
('UppercaseElement')
const LowercaseElement = document.getElementById
('LowercaseElement')
const SpecialCharacters = document.getElementById
('SpecialCharacters')
const Numbers = document.getElementById
('Numbers')
const password = document.getElementById
('password')
const form = document.getElementById('passwordGenForm')

const LOWERCASE_CHAR_CODES = array FromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = array FromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = array FromLowToHigh(48, 57)
const SPECIALCHARACTERS_CHAR_CODES = array FromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)



function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}


getRandomLower(e) {
  const value = e.target.value
  getRandomLower.value = value
  getRandomUpper.value = value
}

function generatePassword(characterAmount, Uppercase, Lowercase, Numbers, SpecialCharacters) 
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

{
  String.fromCharCode(65)
}

function arrayFromLowToHigh(low, high) {
  array.push(i)
} 
  return array
{
  const array = []
  for (let i = low; i <= high; i++)
}

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)
generateBtn.addEventListener('click', writePassword);

form.addEventListener('submit', e => {e.preventDefault()
  const Uppercase = UppercaseElement.checked
  const Lowercase = LowercaseElement.checked
  const SpecialCharacters = SpecialCharactersElement.checked
  const Numbers = Numbers.Element.checked
  const password = generatePassword(Numbers, Uppercase, Lowercase, SpecialCharacters) 
  password.innerText = password
})


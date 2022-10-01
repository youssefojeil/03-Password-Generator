/*
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

*/

// Array with special characters
var specialCharacters = ['!','"','#', '$', '%', '&', "'", '(', ')', 
'*', '+', ',', '-', '.', '/', ':', ';', '<', '=',
'>', '?', '@', "\\", '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseAlphabet = lowercaseAlphabet.map(element =>{
  return element.toUpperCase();
});

console.log(specialCharacters);
console.log(numbers);
console.log(lowercaseAlphabet);
console.log(uppercaseAlphabet);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var passwordLength = window.prompt("How many characters do you want your password to be?");
  var isSpecialCharacters = window.confirm("Do you want to include special characters?");
  var isNumeric = window.confirm("Do you want to include numeric characters?");
  var isLowerCase = window.confirm("Do you want to include lowercase characters?");
  var isUpperCase = window.confirm("Do you want to include uppercase characters?");

  var password = [];

  console.log(passwordLength);
  console.log(isSpecialCharacters);
  console.log(isNumeric);
  console.log(isLowerCase);
  console.log(isUpperCase);

  // random number 
  console.log(specialCharacterIndex);
  console.log(numericIndex);
  console.log(lowercaseIndex);
  console.log(uppercaseIndex);
  // condition if all 4 were selected
  if(isSpecialCharacters && isNumeric && isLowerCase && isUpperCase){

    
    var specialCharacterIndex = Math.floor(Math.random()*specialCharacters.length);
    var numericIndex = Math.floor(Math.random()*numbers.length);
    var lowercaseIndex = Math.floor(Math.random()*lowercaseAlphabet.length);
    var uppercaseIndex = Math.floor(Math.random()*uppercaseAlphabet.length);

    for(var i = 0; i < passwordLength; i++){
      
      password.push(specialCharacters[specialCharacterIndex]);
      console.log(password);
      password.push(numbers[numericIndex]);
      console.log(password);
      password.push(lowercaseAlphabet[lowercaseIndex]);
      console.log(password);
      password.push(uppercaseAlphabet[uppercaseIndex]);
      console.log(password);

      specialCharacterIndex = Math.floor(Math.random()*specialCharacters.length);
      numericIndex = Math.floor(Math.random()*numbers.length);
      lowercaseIndex = Math.floor(Math.random()*lowercaseAlphabet.length);
      uppercaseIndex = Math.floor(Math.random()*uppercaseAlphabet.length);

    }
    console.log(password);
  }
}

// Event listener for button


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

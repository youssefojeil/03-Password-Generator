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

// Array containing numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array containg lowercase alphabet
var lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// function changing lowercase array to uppercase & storing in uppercase array
var uppercaseAlphabet = lowercaseAlphabet.map(element =>{
  return element.toUpperCase();
});

//var passwordCharacters;

//passwordCharacters = specialCharacters;
//console.log(passwordCharacters);

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

  // check for password length
  if(passwordLength < 8 || passwordLength > 128){
    window.alert("The number you chose is not valid. Please choose a number between 8 & 128 characters.");
    generatePassword();
  }
  
  else{
    var isSpecialCharacters = window.confirm("Do you want to include special characters?");
    var isNumeric = window.confirm("Do you want to include numeric characters?");
    var isLowerCase = window.confirm("Do you want to include lowercase characters?");
    var isUpperCase = window.confirm("Do you want to include uppercase characters?");

    
    var passwordCharacters = [];
    var password = [];
  

    console.log(passwordLength);
    console.log(isSpecialCharacters);
    console.log(isNumeric);
    console.log(isLowerCase);
    console.log(isUpperCase);
  

    // if Special Characters Selected
    if(isSpecialCharacters){
      passwordCharacters = passwordCharacters.concat(specialCharacters);
      console.log("special characters selected: " + passwordCharacters);
      console.log(passwordCharacters.length);
      console.log(typeof(passwordCharacters));
    }

    // if Numbers Selected
    if(isNumeric){
      passwordCharacters = passwordCharacters.concat(numbers);
      console.log("Numbers Selected: " + passwordCharacters)
      console.log(passwordCharacters.length)
      console.log(typeof(passwordCharacters));
    }

    // if Lowercase Selected
    if(isLowerCase){
      passwordCharacters = passwordCharacters.concat(lowercaseAlphabet);
      console.log("Lowercase Selected: " + passwordCharacters)
      console.log(passwordCharacters.length)
      console.log(typeof(passwordCharacters));
    }    
    
    // if Uppercase Selected
    if(isUpperCase){
      passwordCharacters = passwordCharacters.concat(uppercaseAlphabet);
      console.log("Uppercase Selected: " + passwordCharacters)
      console.log(passwordCharacters.length)
      console.log(typeof(passwordCharacters));
    }

    // loop through the number of characters chosen by the user
    for (var i = 0; i < passwordLength; i ++){
      // get random number to use as index for array
      var passwordIndex = Math.floor(Math.random()*passwordCharacters.length);
      console.log(passwordIndex);
      console.log(passwordCharacters[passwordIndex]);
      password = password + passwordCharacters[passwordIndex];
      //password = password.push(passwordCharacters[passwordIndex]);
      console.log(password);
    }
    
    console.log("Final Random password is: " + password);
  }

}

// Event listener for button


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

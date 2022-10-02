// Assignment Code
var generateBtn = document.querySelector("#generate");

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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // text & alert output for generated password
  passwordText.value = password;
  window.alert("Your new random password has been generated: " + password);
}

function generatePassword(){

  var passwordLength = window.prompt("How many characters do you want your password to be?");

  // check for password length
  if(passwordLength < 8 || passwordLength > 128){
    window.alert("The number you chose is not valid. Please choose a number between 8 & 128 characters.");
    generatePassword();
  }
  
  else{
    // Ask for user input
    var isSpecialCharacters = window.confirm("Do you want to include special characters?");
    var isNumeric = window.confirm("Do you want to include numeric characters?");
    var isLowerCase = window.confirm("Do you want to include lowercase characters?");
    var isUpperCase = window.confirm("Do you want to include uppercase characters?");

    
    var passwordCharacters = [];
    var password = [];
    
    // if Special Characters Selected
    if(isSpecialCharacters){
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    }

    // if Numbers Selected
    if(isNumeric){
      passwordCharacters = passwordCharacters.concat(numbers);
    }

    // if Lowercase Selected
    if(isLowerCase){
      passwordCharacters = passwordCharacters.concat(lowercaseAlphabet);
    }    
    
    // if Uppercase Selected
    if(isUpperCase){
      passwordCharacters = passwordCharacters.concat(uppercaseAlphabet);
    }

    // loop through the number of characters chosen by the user
    for (var i = 0; i < passwordLength; i ++){
      // get random number to use as index for array
      var passwordIndex = Math.floor(Math.random()*passwordCharacters.length);
      // add characters to password
      password = password + passwordCharacters[passwordIndex];
    }
  }
  // returns the generated password from function
  return password;  

}


// Event listener for button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

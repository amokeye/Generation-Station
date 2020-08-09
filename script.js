// All possible special characters for the generated password(s)
const specialCharacters = "!@#$%^&*(){}[]-/\|,.?"


// Assignment code for the button display
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Generate the password using by establishing criteria and analyzing user inputs
function generatePassword() {

  // Displays prompt to input desired length of password after button is clicked
  var pwdLength = prompt("Enter password length (must be 8-128 characters)");

  // Ensure that user chooses password between 8-128 characters
  while (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) 
    pwdLength = prompt("You must enter a number between 8 and 128!");
  
  // Displays prompts for additional password criteria
  var num = confirm("Numbers desired in password?");
  var lower = confirm("Lower-case letters desired in password?");
  var upper = confirm("Upper-case letters desired in password?");
  var special = confirm("Special characters desired in password?");

  // Ensures that user selects at least one password criterion
  while (!num && !lower && !upper && !special) {
  password = alert("You must select at least one password criterion!");
  num = confirm("Numbers desired in password?");
  lower = confirm("Lower-case letters desired in password?");
  upper = confirm("Upper-case letters desired in password?");
  special = confirm("Special characters desired in password?");
  }

  // Minimum count for numbers, lower-case letters, upper-case letters, and special characters
  var mincount = 0;

  // Empty minimums for numbers, lower-case letters, upper-case letters, and special characters
  var minNum = "";
  var minLow = "";
  var minUp = "";
  var minSpecial = "";

  // Generator Functions related to each type of character (numbers, lower-case letters, upper-case letters, and specials, respectively)
  // Using ASCII characters to ensure that the correct types of characters are returned
  var Array = {
    Numbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
    },
    
    LowerCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
    },

    UpperCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
    },

    SpecialChar: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };

  /*Output (using empty minimums from above) when user chooses to have numbers, lower/upper-case letters, and 
  special characters, respectively*/
  if (num === true) {
    minNum = Array.Numbers();
    mincount++;

  }

  if (lower === true) {
    minLow = Array.LowerCase();
    mincount++;

  }

  if (upper === true) {
    minUp = Array.UpperCase();
    mincount++;

  }

  if (special === true) {
    minSpecial = Array.SpecialChar();
    mincount++;

  }

  // Empty string variable for the "for-return" loop below
  var randoPwdGen = "";

  // "For-return" loop used to get random characters 
  for (let i = 0; i < (parseInt(pwdLength) - mincount); i++) {
    var randonum = Math.floor(Math.random() * 4);

    randoPwdGen += randonum;
}

  // Ensure characters are added to the password
  randoPwdGen += minNum;
  randoPwdGen += minLow;
  randoPwdGen += minUp;
  randoPwdGen += minSpecial;

  // Return the random password that has been generated to the generator's screen!
  return randoPwdGen;

}
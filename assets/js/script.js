// Assignment Code

// Funtion to receive length of password from user
var acceptLength = function () {
  var formatStr = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  // Prompt for the length of the password
  var promptLength = window.prompt("Please enter length of the password, lenth can be between 8 to 128 characters");

  var alphanumStr = (/A-Za-z/).test(promptLength);
  var specialChar = formatStr.test(promptLength);

  // Cancel's program if user selects Cancel
  while (promptLength === null) {
    return 1;
  }

  if (parseInt(promptLength) < 8 || parseInt(promptLength) > 128 || promptLength === "" || alphanumStr || specialChar) {
    window.alert("Please enter a number between 8 to 128.");
    return 0;
  }

  // Return the entered length
  return promptLength;
};

// Function to receive type of password
var acceptcharType = function () {
  // Gives choices on the type of password
  var promptcharType = window.prompt("Please enter type of characters, select from following choices (1 or 2):\n" +
    "1 : lowercase,uppercase characters and numbers\n" +
    "2 : lowercase,uppercase characters, numbers and special characters ");
  // Cancel button                                  
  while (promptcharType === null) {
    return 1;
  }
  // Choices for character types for password
  switch (parseInt(promptcharType)) {
    case 1:
      var promptPassStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return promptPassStr;
      break;
    case 2:
      var promptPassStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"
      return promptPassStr;
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      return 0;
      break;

  }
};

// Function to create/generate password with given length and character type
var generatePassword = function () {
  var generatedPass = "";
  var passLength = acceptLength();
  if (parseInt(passLength) !== 1) {
    while (passLength === 0) {
      passLength - acceptLength();
    }
  }
  if (parseInt(passLength) !== 1) {
    var passStr = acceptcharType();
    if (parseInt(passStr) !== 1) {
      while (passStr === 0) {
        passStr - acceptcharType();
      }
      // Create/generate random number to pick a random character from character type string
      for (var cnt = 0; cnt < passLength; cnt++) {
        var getPos = Math.floor(Math.random() * passStr.length);
        var generatedPass = generatedPass + passStr.charAt(getPos);
      }
    }
  }
// Return the newly created/generated password
  return generatedPass;
};

// References to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password != "") {

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

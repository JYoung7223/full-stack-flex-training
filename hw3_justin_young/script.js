// Variable Declarations
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'o', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChars = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '[', '}', ']', '|', '\\', ':', ';', '"', "'", ',', '<', '.', '>', '?', '/', ' '];

let generateBtn = document.getElementById("generate");
let passwordArea = document.querySelector("#password");
// Event Listeners
generateBtn.addEventListener("click", writePass)

// Helpter Functions
function writePass(event) {
  // Get parameters and validate
  // Length needs to be between 8 to 128
  var numChar = NaN;
  while ((isNaN(numChar)) || (numChar < 8) || (numChar > 128)) {
    numChar = prompt("How many characters would you like the password to be?");
    // If cancel just end
    if (numChar === null) {
      return;
    }
    numChar = parseInt(numChar);
    if ((isNaN(numChar)) || (numChar < 8) || (numChar > 128)) {
      alert("Must enter value between 8 and 128");
    }
  }

  let useLower = confirm("Press OK to include lower case letters.");
  let useUpper = confirm("Press OK to include upper case letters.");
  let useNum = confirm("Press OK to include numbers.");
  let useSpec = confirm("Press OK to use special characters.");
  // Need at least 1 char type
  if (!useLower && !useUpper && !useNum && !useSpec) {
    alert("You must select at least 1 character type for password");
    return;
  }

  passwordArea.value = generatePassword(numChar, useLower, useUpper, useNum, useSpec);
}

// Generate a password using given parameters
function generatePassword(numChar, useLower, useUpper, useNum, useSpec) {
  let password = "";  // This will hold the generated password
  let possibleChars = []; // This will hold the possible characters to choose from
  if (useLower) possibleChars[possibleChars.length] = lowerCase;
  if (useUpper) possibleChars[possibleChars.length] = upperCase;
  if (useNum) possibleChars[possibleChars.length] = numbers;
  if (useSpec) possibleChars[possibleChars.length] = specialChars;

  while (password.length < numChar) {
    // Randomly choose character type
    let charType = Math.floor(Math.random() * Math.floor(possibleChars.length));
    // Randomly choose character
    let pickedChar = Math.floor(Math.random() * Math.floor(possibleChars[charType].length));
    password = password + possibleChars[charType][pickedChar];
  }
  return password;

}
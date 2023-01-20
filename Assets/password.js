let generateButton = document.getElementById("generate-button");
let copyButton = document.getElementById("copy-button");
let passwordDisplay = document.getElementById("password-display");
let passwordLength = document.getElementById("password-length");
let includeUppercase = document.getElementById("include-uppercase");
let includeLowercase = document.getElementById("include-lowercase");
let includeNumbers = document.getElementById("include-numbers");
let includeSpecialCharacters = document.getElementById("include-special-characters");

generateButton.addEventListener("click", function() {
  let length = passwordLength.value;
  let password = generatePassword(length, includeUppercase.checked, includeLowercase.checked, includeNumbers.checked, includeSpecialCharacters.checked);
  passwordDisplay.value = password;
});

copyButton.addEventListener("click", function() {
  passwordDisplay.select();
  document.execCommand("copy");
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {
  let password = "";
  let possible = "";

  if (includeUppercase) {
    possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeLowercase) {
    possible += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeNumbers) {
    possible += "0123456789";
  }

  if (includeSpecialCharacters) {
    possible += "!@#%^&*()_+";
  }

  if (possible.length === 0) {
    return "Error: You must select at least one character type to include in the password.";
  }

  for (let i = 0; i < length; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return password;
}

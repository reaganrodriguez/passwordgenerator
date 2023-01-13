// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var length = prompt("Enter the desired length of your password (between 10 and 64 characters):");
while(length < 10 || length > 64) {
    alert("Invalid length. Please enter a value between 10 and 64.");
    length = prompt("Enter the desired length of your password (between 10 and 64 characters):");
}
do {
  var l = confirm("Should I include Lowercase ? ");
var u = confirm("Should I include Uppercase ? ");
var n = confirm("Should I include Numeric ? ");
var s = confirm("Should I include Special characters ?");
} while ((l || u || n || s) ==false);





var randomElement1="",i=0;
for (i = 1; i <= length; i++) {
i=i-1;
if (l==true) {
   randomElement1 = randomElement1 + lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
  i++;
  if (i == length) {
    break;
  }
}
if (u==true) {
   randomElement1 = randomElement1+upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
  i++;
    if (i == length) {
    break;
  }
}
if (n==true) {
   randomElement1 = randomElement1+numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
  i++;
    if (i == length) {
    break;
  }
}  
if (s==true) {
   randomElement1 = randomElement1+specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
  i++;
    if (i == length) {
    break;
  }
}  
}
//console.log(randomElement1);


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = randomElement1;
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
writePassword();

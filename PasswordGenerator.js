function generatePassword(options) {
  const {
    length = 12,
    includeUppercase = true,    // Default to true
    includeLowercase = true,   // Default to true
    includeNumbers = true,    // Default to true
    includeSymbols = true,   // Default to true
  } = options;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let availableChars = "";
  if (includeUppercase) availableChars += uppercaseChars;
  if (includeLowercase) availableChars += lowercaseChars;
  if (includeNumbers) availableChars += numberChars;
  if (includeSymbols) availableChars += symbolChars;

  if (availableChars.length === 0) {
    throw new Error("At least one character type must be selected.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
}

// Example usage:
const options = {
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: false,
};

console.log(generatePassword(options));

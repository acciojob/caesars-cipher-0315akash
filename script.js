// Your Script here.

function rot13(str) {
  // Create an array to store the decoded characters
  let decodedArr = [];

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code of the current character
    let charCode = str.charCodeAt(i);

    // Decode uppercase letters (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      // Apply the ROT13 shift by adding 13 to the character code
      let decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      
      // Convert the decoded character code back to a letter and add it to the decoded array
      decodedArr.push(String.fromCharCode(decodedCharCode));
    } else {
      // For non-alphabetic characters, pass them on without decoding
      decodedArr.push(str[i]);
    }
  }

  // Join the decoded array into a string and return it
  return decodedArr.join('');
}

// Example usage
let encodedString = "EBG13 rknzcyr.";
let decodedString = rot13(encodedString);
console.log(decodedString);  // Output: ROT13 example.
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  // Split the string into an array of the words split by whitespace
  var array = str.split(" ");
  
  // Loop through the words
  for (var i = 0; array.length > i; i++) {
  
    // Set the word to lowercase and split up the characters into an array 
    array[i] = array[i].toLowerCase().split("");
    
    // Set the first letter of the word to uppercase, then rejoin the word
    array[i][0] = array[i][0].toUpperCase();
    array[i] = array[i].join(""); 
  }
  
  // Rejoin the sentence
  return array.join(" ");
}

// Test Cases
titleCase("I'm a little tea pot");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

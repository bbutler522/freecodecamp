// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
  var truncStr = "";
  
  // If the string is longer than the given max and greater than three characters
  if (str.length > num && num > 3) {
    
    // slice off the beginning of the string through the max including the 3 . as the total
    truncStr = str.slice(0, (num-3));
    
    // Add the ellipsis
    truncStr = truncStr + "...";
    
  // If the max is 3 or under then do not count the ellipsis in the final length
  } else if (str.length > num) {
    truncStr = str.slice(0, num);
    // Add the ellipsis
    truncStr = truncStr + "...";
    
  } else {
    truncStr = str;
  }
  
  return truncStr;
}

// Test Cases
truncateString("A-tisket a-tasket A green and yellow basket", 11) // should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) // should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) // should return "A...".
truncateString("Absolutely Longer", 2) // should return "Ab...".

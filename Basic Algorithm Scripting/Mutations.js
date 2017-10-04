// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  var test = [];
  
  // Separate our strings and set them to lower case
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  
  // Split the letters we're looking for up so that we can loop through them.
  second = second.split("");
 
  for (var i = 0; i < second.length; i++) {
  
    // Push the found indexes to our test array
    test.push( first.indexOf(second[i]) );
  }

  // Check if the index of -1 is found in our test array because that means one or more of the letters we're checking is not contained in the first array.
  if (!test.includes(-1)) {
    return true;
  } else {
    return false;
  }
}

mutation(["hello", "Hello"]);

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  var largest = [];
  for (var i = 0; i < arr.length; i++) {
  
    // Within each array in the loop, sort it from largest to smallest number
    var newArr = arr[i].sort(function(a, b){
      return b - a;
    });
    
    // Push the largest number to the array of largest numbers
    largest.push(newArr[0]);
  }
  return largest;
}

// Test Case
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

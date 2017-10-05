// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method.
//The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  var nameArr = fullName.split(' ');
  
    this.getFirstName = function() {
      return nameArr[0];
    };
  
    this.getLastName = function() {
      return nameArr[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(first) {
      nameArr[0] = first;
      fullName = nameArr.join(' ');
    };
  
    this.setLastName = function(last) {
      nameArr[1] = last;
      fullName = nameArr.join(' ');
    };
  
    this.setFullName = function(firstAndLast) {
      fullName = firstAndLast;
      nameArr = fullName.split(' ');
    };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();

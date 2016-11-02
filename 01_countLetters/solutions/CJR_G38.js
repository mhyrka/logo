// input = 'hello'

function countLetters(input) {
  // we need something to store the counts in
  // array, object, string
  var letterCounts = {};
  input = input.toLowerCase();
  // go over each letter in the input
  // for loop, for in
  for (var i = 0; i < input.length; i++) {
    // make sure it's a letter
      // increment the count
      // in the thing we're using
      // to store the counts
    var key = input[i]; // make this the key - in a key value pair

    // what if we already have this key?????
    if(letterCounts.hasOwnProperty(key)) {
      // increment the count
      letterCounts[key] += 1;
    } else {
      // the first time we are seeing a letter
      // create the key and set it to 1
      letterCounts[key] = 1;
    }
  }

  var result = '';
  // we need something to store the
    // formatted letter counts
  // we now know the counts of each letter
  // iterate over the counts
  for (var key in letterCounts) {
    // create a string with the letter and the count
    // letter:count
    var letterCount = key + ':' + letterCounts[key];
      // add the string to the thing
      // we're storing the formatted letter counts in
    result += letterCount + ' ';
  }

  // return the formatted letter counts
  return result;
}

var counts = countLetters('hello world');
console.log(counts);

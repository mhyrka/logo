// Write a function that returns the longest string in the array and it's length as an object.
//
// ## Input
//
// An array of strings (e.g ["truck", "sidewalk", "book"])
//
// ## Output
//
// An object with the key of the longest string and a value of the length of the string (e.g. { sidewalk: 8 })
'use strict'

function myLongestString (ray) {
  var longest = 0;
  var longestStr = '';
  for(var i = 0; i < ray.length; i++) {
      if(ray[i].length >= longest) {
        longest = ray[i].length;
        longestStr = ray[i];
      }
  }
  return {[longestStr] : longest};
}

console.log(myLongestString(["truck", "sidewalk", "book"]));
console.log(myLongestString(["long", "shortest", "nonsense", "onomatopoeia"]));
console.log(myLongestString(["a", "ab", "a b", "a b c d"]));

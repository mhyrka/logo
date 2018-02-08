function reverse(word) {
  var splitWord = word.split("");
  var reverseArray = splitWord.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverse('hello world'));



module.exports = reverse

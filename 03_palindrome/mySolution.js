function palindromeFinder(word) {
  word = word.toLowerCase();
  var splitWord = word.split();
  if (splitWord === splitWord.reverse()) {
    console.log(word + " is a palindrome!")
  } else {
    console.log(word + " is not a palindrome...")
  }
}

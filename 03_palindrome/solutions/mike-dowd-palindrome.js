function myPalindromeTester(str) {
  console.log(str);
  var palRay = [];
  str = str.toLowerCase();
  for(var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      palRay.push(str.charCodeAt(i));
    }
  }
  var revRay = palRay.slice(0).reverse();
  return (myCompare(palRay, palRay.slice(0).reverse()));
}

function myCompare(rayA, rayB) {
  if(rayA.length !== rayB.length) {
    return false;
  }
  for(var i = 0; i < rayA.length; i++) {
    if(rayA[i] !== rayB[i]) {
      return false;
    }
  }
  return true;
}

console.log(myPalindromeTester('A man, a plan, a canal, Panama'));
console.log(myPalindromeTester('anna'))
console.log(myPalindromeTester('banana'));
console.log(myPalindromeTester('I, man, am regal - a German am I'))
console.log(myPalindromeTester('No lemons, no melon'))
console.log(myPalindromeTester('Was it a car or a cat I saw?'))
console.log(myPalindromeTester('Probably not a palindrome'))

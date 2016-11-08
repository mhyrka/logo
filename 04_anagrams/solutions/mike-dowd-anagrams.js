function myAnagram(strA, strB) {
  strA = strA.split('').sort().join('').trim();
  strB = strB.split('').sort().join('').trim();
  return strA === strB;
}

console.log(myAnagram('dowd','wddo'));
console.log(myAnagram('mike', 'ikim'));
console.log(myAnagram('abcdrfg', 'gabcdrf'));
console.log(myAnagram('qwert', 'qwerty'));
console.log(myAnagram('asdfghj', 'asdfghj'));
console.log(myAnagram('zxcvbnm', 'mnbvcxz'));
console.log(myAnagram('banana', 'aaannb'))
console.log(myAnagram('examples', 'selpmaxe'))
console.log(myAnagram('a', 'a'))
console.log(myAnagram('examples', 'eexamples'))
console.log(myAnagram('a', 'b'))

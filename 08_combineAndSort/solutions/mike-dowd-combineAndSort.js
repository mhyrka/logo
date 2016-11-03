'use strict'

function myCombineAndSort(rayA, rayB) {
  var len = rayB.length;
  for(var i = 0; i < len; i++) {
      rayA.push(rayB.pop());
  }
  return rayA.sort();
}

console.log(myCombineAndSort([ "cat", "dog", "fish", "zebra" ], [ "lion", "aardvark", "gorilla" ]));
console.log(myCombineAndSort([ "zest", "aquafresh", "zapper", "zipper" ], [ "yullow", "yellow", "yallow", "zast" ]))

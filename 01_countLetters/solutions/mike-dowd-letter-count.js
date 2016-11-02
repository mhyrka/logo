'use strict'

function letterCount(str) {
  var letterRay = [];
  var countRay = [];

  str = str.toLowerCase();

  for(var i = 0; i < str.length; i++) {
    if(!letterRay.includes(str[i]) && (str[i].charCodeAt(0) > 96 && str[i].charCodeAt(0) < 123)) {
      letterRay.push(str[i]);
      var sum = 0;
      for(var j =0; j <str.length; j++) {
        if(str[j] === str[i]) {
          sum++;
        }
      }
      countRay.push(sum);
    }
  }
  var outStr = '';
  for(var i = 0; i < letterRay.length ; i++) {
      outStr += letterRay[i] + ':' + countRay[i] + ' ';
  }
  return outStr;
}

console.log(letterCount("hello world"));
console.log(letterCount("aaaaaaaa0987bbbbb][p;NNnnnN"));

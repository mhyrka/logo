function rampNumber(num) {
  var numRay = num.toString().split('');
  for(var i = 0; i < numRay.length - 1; i++) {
    if(numRay[i] > numRay[i+1]) {
      return false;
    }
  }
  return true;
}

console.log(rampNumber(23456));
console.log(rampNumber(111222223));
console.log(rampNumber(111111222223456787));
console.log(rampNumber(1230456));
console.log(rampNumber(1111111));
console.log(rampNumber(0));
console.log(rampNumber(10));

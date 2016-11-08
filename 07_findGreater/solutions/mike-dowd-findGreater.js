// Write a function that takes two arguments. The first argument is an array of numbers. The second argument is a number two compare with each item in the array. Your function should return an array of numbers that are greater than the second argument.

'use strict'

function myFindGreater(ray, comp) {
  var newRay = [];
  console.log(ray, comp);
  for(var i = 0; i < ray.length; i++) {
    if(ray[i] > comp){
      newRay.push(ray[i]);
    }
  }
  return newRay;
}

console.log(myFindGreater([1,2,3,4,5,6,7,8], 5));
console.log(myFindGreater([9,12,.3,-4,25,3.6,7,8,0], 3));
console.log(myFindGreater([.1,.2,.3,.4,.5,.6,.7,.8], .5));
console.log(myFindGreater([-1,-2,-3,-4,-5,-6,-7,-8], -5));

function upDownEven(ray) {
  var newRay = []
  for(var i = 1; i < ray.length; i++) {
    if(ray[i] > ray[i-1]) {
      newRay.push('up');
    }else if(ray[i] < ray[i-1]) {
      newRay.push('down');
    }else {
      newRay.push('even');
    }
  }
  return newRay;
}

console.log(upDownEven([6,3,5,4,3,4,4,5]));

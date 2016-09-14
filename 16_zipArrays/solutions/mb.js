function zip(a1, a2) {
  var length = a1.length > a2.length ? a2 : a1;
  return length.reduce(function (result, item, i) {
    result.push(a1[i]) && result.push(a2[i]);
    return result;
  }, [])
}

module.exports = zip;

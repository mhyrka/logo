function zipArrays(arr1, arr2) {
  return arr1.map((element, i) => {
    switch (i) {
      case i%2 === 0:
          arr1.splice(i, 0, arr2[element])
        break;
      default:

    }
  })
}

zipArrays([1,2,3], [4,5,6])

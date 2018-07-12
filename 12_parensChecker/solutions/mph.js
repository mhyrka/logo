function parensChecker(string) {
  let newString = string.split('')
  console.log(newString)
  return newString.map(parentheses => {
    if (parentheses[0]===")") {
      return false
    }
  })
}

parensChecker("()(((())))")

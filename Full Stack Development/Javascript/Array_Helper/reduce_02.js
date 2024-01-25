
function isValid(p) {
  return !p.split("").reduce(function (previous, char) {
    if (previous < 0) return previous;
    if (char === "(") return ++previous;
    if (char === ")") return --previous;
    return previous;
  }, 0);
}

console.log(isValid("(a + c)(((a+b))((p*k)))"));    

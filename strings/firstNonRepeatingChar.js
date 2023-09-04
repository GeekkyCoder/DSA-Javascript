// my Code signal interview problems solutions

//problem statement
//https://app.codesignal.com/interview-practice/question/uX5iLwhc6L5ckSyNC/description

function firstNoRepeatingChar(s) {
  for (let el of s) {
    if (s.lastIndexOf(el) === s.indexOf(el)) {
      return el;
    }
  }

  for (let el of s) {
    if (s.lastIndexOf(el) != s.indexOf(el)) {
      return "_";
    }
  }
}

console.log(firstNoRepeatingChar("abacabad"))
console.log(firstNoRepeatingChar("abacabaabacaba"))

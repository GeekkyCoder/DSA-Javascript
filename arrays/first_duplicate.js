// my Code signal interview problems solutions

//problem statement
//https://app.codesignal.com/interview-practice/question/pMvymcahZ8dY4g75q/description

function first_duplicate(a) {
  let set = new Set();

  for (let element of a) {
    if (set.has(element)) return element;
    else set.add(element);
  }

  return -1;
}

console.log(first_duplicate([2, 1, 3, 5, 3, 2]));

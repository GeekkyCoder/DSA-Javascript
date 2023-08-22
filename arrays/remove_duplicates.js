// remove duplicate elements in array

// input
//[5,2,3,2,1,3,1,8,10,8,10]

//output
// [ 1, 10, 2, 3, 5, 8 ]

function removeDuplicates(array) {
  let last = null;
  let answer = [];
  array.sort();

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];

    if (last !== currentElement) {
      answer.push(currentElement);
    }

    last = currentElement;
  }

  return answer;
}

console.log(removeDuplicates([5, 2, 3, 2, 1, 3, 1, 8, 10, 8, 10])); //[ 1, 10, 2, 3, 5, 8 ]

// time complexity: 0(n)
// space complexity: 0(n)

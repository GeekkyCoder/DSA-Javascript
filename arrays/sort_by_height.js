// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function sortByHeight(a) {
  const people = a.filter((height) => height !== -1);
  people.sort((a, b) => a - b);

  let index = 0;

  for (let i = 0; i < a.length; i++) {
    // no tree replacing with people
    if (a[i] !== -1) {
      a[i] = people[index];
      index++;
    }
  }

  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(sortByHeight([-1, -1, -1, -1, -1]));

// Given and array of string, sort the array by the length of the strings in increasing order

// input: ["dragon","slayer","magic","wizards of oz","ned stark"]

// output: ["magic","dragon","slayer","ned stark","wizards of oz"]

let strings = ["dragon", "slayer", "magic", "wizards of oz", "ned stark"];

function stringComparator(a, b) {
  return a.length - b.length;
}

strings.sort(stringComparator);

console.log(strings);

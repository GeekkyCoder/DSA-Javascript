// median: 
// median is an even number of Set, is the average of two middle SVGAnimatedNumberList, if array is sorted!


// odd -> if the no of elements are odd, simply array.length/2 is the median!
// even -> if the no of elements are even, simply the (array.length/2 + array.length/2 -1) / 2 is the median!


//odd case: [1,2,3,4,5] -> 3
//even case: [1,2,3,4] -> (2+3) /2 = 2.5


function medianOfArray(array) {
  let length = array.length;
  // Odd
  if (length % 2 == 1) {
    return array[Math.floor(length / 2)];
  } else {
    // Even
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}

console.log(medianOfArray([1, 2, 3, 4]));

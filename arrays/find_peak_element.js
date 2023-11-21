// leetcode problem: find peak element 


// peak --> maximum 


// hint: imagine a mountain shape


const findPeakElement = (nums) => {
  let s = 0;
  let e = nums.length - 1;
  let mid = Math.floor((s + e) / 2);

  while (s < e) {
    if (nums[mid] < nums[mid + 1]) {
      s = mid + 1;
    } else {
      e = mid;
    }

    mid = Math.floor((s + e) / 2);
  }

  return s;
};


console.log(findPeakElement([1,2,1,3,5,6,4]))
console.log(findPeakElement([1,2,3,1]))

// Time Complexity: 0(log N)
// Space Complexity: 0(1)
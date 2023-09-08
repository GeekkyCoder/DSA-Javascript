// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or no

function isLucky(n) {
  // converting the num to string
  let nStr = n.toString();

  // half length index
  let halfLength = nStr.length / 2;

  let sumFirstHalf = 0;
  let sumSecondHalf = 0;

  for (let i = 0; i < nStr.length; i++) {
    let digit = parseInt(nStr[i]);
    if (i < halfLength) {
      sumFirstHalf += digit;
    } else {
      sumSecondHalf += digit;
    }
  }

  return sumFirstHalf === sumSecondHalf;
}

console.log(isLucky(1230));
console.log(isLucky(239017));

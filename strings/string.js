// String?

// String are series of characters

// Strings in JavaScript can be transformed and processed in various ways, such as converting them to uppercase or lowercase, extracting substrings, searching for specific characters or sequences, and comparing strings to determine whether they are equal

//* declare
let str = "hello";

//* access
str.charAt(1); //e
str[1]; // e

// Note:
// strings are immutable in javascript, we can not change or update the values of strings

//eg:

let str2 = "faraz";
str2[1] = "z";
let upd = str2.charAt(1);
console.log(upd); // a
console.log(str2); // faraz

// ****VERY IMPORTANT**************************
// How do you update the value of string then?

// we can convert the string to array temporarily and update any character we want and later convert the array back to string

//example 1:
let newStr = [...str2];
newStr[0] = "m";
let updated = newStr.toString();
console.log(newStr);

//example2
let newStr2 = "Ahmed";
let arrayStr = newStr2.split("");
arrayStr[2] = "hello";
arrayStr.toString();
console.log(arrayStr);

//* uppercase and lowercase
"faraz".toUpperCase();
"FARAZ".toLowerCase();

//* extracting part of string

let newStr3 = "hello iam a programmer";
let extractedPart = newStr3.substring(2, 5); // llo
console.log(extractedPart);

let newStr4 = "very weird";
let extractedPart2 = newStr4.substring(5, 6); //w
console.log(extractedPart2);

//String comparsions
let charA = "a";
let charB = "b";
console.log(charA < charB); //true
console.log(charB < charA); // false

let charC = "cd";
let charD = "ef";
console.log(charC < charD); // true

//* Searching in string

// we can use indexOf method of string to look for a sub string inside the string, whether it exists or Notification, if exists it returns the index of first character of substring that is being searched, if does not exist returns -1

let str5 = "winter is coming";
console.log(str5.indexOf("winter")); // 0
console.log(str5.indexOf("wintergb")); //-1

//** */ function to find the part of string if it exists returns true else rteurn false

function existsInString(strValue, search) {
  return strValue.indexOf(search) !== -1;
}

console.log(existsInString("winter is coming", "coming")); // true
console.log(existsInString("winter is coming", "hello")); // false

// indexOf method can also be used to find the occurence of a character inside string

function findOccurence(str, a) {
  let pos = str.indexOf(a); //24

  let count = 0;

  while (pos !== -1) {
    count++;
    pos = str.indexOf(a, pos + 1);
  }

  return count;
}

// a appears 3 times
console.log(
  findOccurence("He's my king from this day untill his last day", "a")
); // 3



//* startsWith and endsWith
let str6 = "faraz"
console.log(str6.startsWith('f'))
console.log(str6.startsWith('z'))
console.log(str6.endsWith('z'))


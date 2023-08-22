// Given a matrix , print the elements in a spiral order

//input
//   1 2 3 4 5
//   6 7 8 9 10
//   11 12 13 14 15
//   16 17 18 19 20

//spiral
// 1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12



// steps: 
// * Priniting from left to right 
// * printing from top to bottom 
// * printing from right to left 
// * printing from bottom to top 
// * keeping a limit on these operations 

// four key variables: 
 // topRow
 // bottomRow
 // leftCol
 // rightCol

function spiral(matrix) {
  let topRow = 0,
    leftCol = 0,
    bottomRow = matrix.length - 1,
    rightCol = matrix[0].length - 1,
    answer = [];

  while (topRow < bottomRow && leftCol < rightCol) {
    for (let i = topRow; i <= rightCol; i++) {
      answer.push(matrix[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      answer.push(matrix[i][rightCol]);
    }

    rightCol--;

    for (let i = rightCol; i >= leftCol; i--) {
      answer.push(matrix[bottomRow][i]);
    }

    bottomRow--;

    for (let i = bottomRow; i >= topRow; i--) {
      answer.push(matrix[i][leftCol]);
    }

    leftCol++;
  }

  console.log(answer);
}

spiral([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
]);


//Time Complexity : 0(mn)
//Space Complexity : 0(1)
// Here m is the number of rows and n is the number of columns, each item in the matrix is visited only once! 
function Matrix(rows,columns){
    let array = new Array(rows)
    for(let i=0; i< columns;i++){
        array[i] = new Array(columns)
    }

    return array
}

// 3 by 3 empty matrix cell 
console.log(Matrix(3,3))


// 3 by 3 matrix
let matrix3By3 = [[1,2,3],[4,5,6],[7,8,9]]

// acccess
matrix3By3[0] // [1,2,3]
matrix3By3[1] // [4,5,6]
matrix3By3[2] // [7,8,9]

//Accessing individual elements in matrix 
matrix3By3[0][0] // 1
matrix3By3[0][1] // 2
matrix3By3[0][2] // 3

matrix3By3[1][0] // 4
matrix3By3[1][1] // 5
matrix3By3[1][2] // 6

matrix3By3[2][0] // 7
matrix3By3[2][1] // 8
matrix3By3[2][2] // 9











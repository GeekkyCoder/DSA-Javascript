//Iterative

function factorial(n) {
    if(n==2) {
        return 2
    }

    let answer = 1 

    for(let i=2; i<=n;i++) {
        answer = answer * i 
    }

    return answer
}

console.log(factorial(5))




function factorialRecursive(n) {
    if(n==2) {
        return 2 
    }

    return n * factorialRecursive(n-1)
}

console.log(factorialRecursive(5))
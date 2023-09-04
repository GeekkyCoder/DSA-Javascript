//Iterative

function fibIterative(n) {
    if(n<=1) return n 
    
    let sum =0, last = 1, lastLast = 0
    
    for(let i=1; i<n;i++) {

        sum = lastLast + last 
    
        lastLast = last
        
        last = sum 
        
    }
    
    return sum
}

console.log(fibIterative(6))



// Recursive

function fibonacciRecurive(n) {
  if(n <=1) return n 

  return fibonacciRecurive(n-1) + fibonacciRecurive(n-2)
}

console.log(fibonacciRecurive(6))
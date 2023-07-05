// LIFO --> LAST IN FIRST OUT 

class ArrayStack {
    constructor(){
        this.data = []
        this.length = 0
    }

    push(value){
       this.data.push(value)
       this.length++
    }

    pop(){
        this.data.pop()
        this.length--
    }

    peek(){
        return this.data[this.length-1]
    }
}


const myArrayStack = new ArrayStack()
myArrayStack.push("google")
myArrayStack.push("udemy")
myArrayStack.push("coursera")
myArrayStack.pop()
myArrayStack.pop()
console.log(myArrayStack.peek())
console.log(myArrayStack)



//Discord
//Udemy
//google

  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      if (this.isEmpty()) {
        this.bottom = null
        return this
      }
      return this.top
    }
    push(value) {
      const newNode = {
        value: value,
        next: null
      }
      if (this.length === 0) {
        this.top = newNode
        this.bottom = newNode
        this.length++
        return this
      }
  
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
      this.length++
      return this
    }
  
    pop() {
      if (this.isEmpty()) {
        this.bottom = null
        return this
      }
      const holdingPointer = this.top.next
      this.top = holdingPointer
      this.length--
      return this
    }
  
    isEmpty() {
      if (!this.length) {
        return true
      }
    }
    //isEmpty
  }
  
  
  const myStack = new Stack();
  myStack.push('google')
  myStack.push("linkdein")
  myStack.push("meta")
  myStack.push("udemy")
  myStack.push("coursera")
  myStack.pop()
  myStack.pop()
  myStack.pop()
  
  console.log(myStack.peek())
  
  
  
  
  
  
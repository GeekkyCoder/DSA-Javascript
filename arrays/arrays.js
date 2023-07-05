class Array {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length == 0) {
      return;
    }
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length-1] 
    this.length--;
    return lastItem;
  }

  insertAtIndex(index, value) {
    if (index >= this.length) {
      return this.push(value);
    }

    // pushing the value at index
    for (let i = 0; i <= index; i++) {
      if (i == index) {
        this.data.splice(index, 0, value);
        break
      }
    }

    this.length++;

    return this;
  }

  removeAtIndex(index){
    const lastItem = this.data[this.length-1]
    this.shiftIndexes(index)
    return lastItem
  }

  shiftIndexes(index){
    for(let i=index;i<this.length;i++){
       this.data[i] = this.data[i+1]
    }

    delete this.data[this.length-1]
    this.length--
  }

  traverse() {
    const values = [];
    for (let el of this.data) {
      values.push(el);
    }
    return values;
  }
}

const myArray = new Array();
console.log(myArray.push(10));
console.log(myArray.push(20));
console.log(myArray.pop())
console.log(myArray.insertAtIndex(1, 25));
console.log(myArray.insertAtIndex(100, 1600));
myArray.removeAtIndex(this.length-1)
myArray.removeAtIndex(0)
console.log(myArray)

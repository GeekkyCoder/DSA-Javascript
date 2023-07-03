// visuallizing linked list in javascript using hashmap ->> objects
const linkedList = {
  value: 10,
  next: {
    value: 5,
    next: {
      value: 16,
      next: null,
    },
  },
};

// creacting a linked list in js
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // appends a new node, so now the tail will be newNode
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // prepend -> add the value before the head, so it becomes new head node
  prepend(value) {
    // updates the head node, which will be newValue
    // eg: -> 1 --> 10 --> 5 -->16
    const newNode = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    // return this;
  }

  insert(index, value) {
    // if the index at which value to be inserted is greater than the length, add the value to th end
    if (index >= this.length) {
      return this.append(value)
    }

    // add the value to particular index

    const newNode = {
      value: value,
      next: null
    }
    // traversing to index - 1 to get the 10, because we want to add the new node after 10 and before 5
    const leader = this.traverseToIndex(index - 1)

    /* visual
    10       5
    *       *
      \ 99 |
        *
    */

    // 5
    const holdingPointer = leader.next
    // 99 
    leader.next = newNode
    // 5
    newNode.next = holdingPointer

    this.length++

    // 10 --> 99 --> 5
  }

  traverseToIndex(index) {
    let currentNode = this.head
    let counter = 0
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    // {value:10,next:{value:5,...}}, now we have the 10
    return currentNode
  }

  remove(index){
    if(index > this.length){
      return "no item"
    }
    const leader = this.traverseToIndex(index-1)
    const temp = leader.next.next 
    delete leader.next 
    leader.next = temp
    this.length--
  }


  printList() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }

  reverse(){
   
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(100, 99)
myLinkedList.insert(2, 99)
myLinkedList.remove(3)
// console.log(myLinkedList.printList())
myLinkedList.append(300)
// console.log(myLinkedList.printList())
myLinkedList.remove(1)
console.log(myLinkedList.printList())



// console.log(myLinkedList);

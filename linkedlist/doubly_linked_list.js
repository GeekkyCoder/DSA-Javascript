// visuallizing Doubly linked list in javascript using hashmap ->> objects

// const DoublylinkedList = {
//   value: 10,
//   next: {
//     value: 5,
//     prev:null,
//     next: {
//       value: 16,
//       next: null,
//       prev:5
//     },
//   },
// };

// creacting a linked list in js
class DoublylinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // appends a new node, so now the tail will be newNode
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
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
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // if the index at which value to be inserted is greater than the length, add the value to th end
    if (index >= this.length) {
      return this.append(value);
    }

    // add the value to particular index

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    // traversing to index - 1 to get the 10, because we want to add the new node after 10 and before 5
    const leader = this.traverseToIndex(index - 1);

    /* visual
    10       5
    *       *
      \ 99 |
        *
    */

    // 5
    newNode.prev = leader;
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;

    this.length++;

    // 10 --> 99 --> 5
    return this;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    // {value:10,next:{value:5,...}}, now we have the 10
    return currentNode;
  }

  remove(index) {
    if (index > this.length) {
      return "invalid index";
    }
    const leader = this.traverseToIndex(index - 1);
    const temp = leader.next.next;
    delete leader.next;
    leader.next = temp;
    this.length--;
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
}

const myDoublyLinkedList = new DoublylinkedList(10);

myDoublyLinkedList.append(2);
myDoublyLinkedList.append(55);
myDoublyLinkedList.prepend(100);
console.log(myDoublyLinkedList.insert(2, 76));

console.log(myDoublyLinkedList.printList());

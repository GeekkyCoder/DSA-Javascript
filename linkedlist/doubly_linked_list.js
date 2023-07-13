// DoublyLinkedList
class DoublyNode {
  constructor(value) {
    this.value = value,
      this.next = null,
      this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = this.head,
    this.prev = null
    this.length = 0
  }

  // add at beginning 0(1)
  prepend(value) {
    const newNode = new DoublyNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      this.length++
    } else {
      // old head 
      const oldHead = this.head
      this.head.prev = newNode
      this.head = newNode
      this.head.next = oldHead
      this.length++
    }
  }

  // add at end 0(1)
  append(value) {
    const newNode = new DoublyNode(value)
    if (this.tail) {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
      this.length++
    }

    return undefined
  }

  // inserting at index 0(n)
  insert(index, value) {
    const newNode = new DoublyNode(value)
    const leader = this.traverseToIndex(index - 1)
    const tempHolder = leader.next
    newNode.prev = leader
    leader.next = newNode
    newNode.next = tempHolder
    tempHolder.prev = newNode
    this.length++
  }

  // removing at partilcular index 0(n)
  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    leader.next.next.prev = leader
    leader.next = leader.next.next
    this.length--
  }

  traverseToIndex(index) {
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }


  // searching 0(n)
  search(value) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }

    return "not found"
  }

  //0(n)
  traverse() {
    let currentNode = this.head
    let values = []
    while (currentNode) {
      values.push(currentNode.value)
      currentNode = currentNode.next
    }

    return values
  }

}

const myDoublyLinkedList = new DoublyLinkedList()
myDoublyLinkedList.prepend(10)
myDoublyLinkedList.prepend(20)
myDoublyLinkedList.append(30)
myDoublyLinkedList.append(50)
myDoublyLinkedList.insert(2,70)
myDoublyLinkedList.remove(2)
console.log(myDoublyLinkedList.search(10))
console.log(myDoublyLinkedList.traverse())
console.log(myDoublyLinkedList)



// time complexities of Doubly linked list: 
// searching:0(n)
// traverse: 0(n)
// insert: 0(n)
// remove: 0(n)
// prepend: 0(1)
// append: 0(1)

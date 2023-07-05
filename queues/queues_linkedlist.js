// FIFO --> FIRST IN FIRST OUT

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.first) {
      this.last = null;
      return;
    }

    if (this.last === this.first) {
      this.first = null;
      this.last = null;
      this.length--;
      return;
    }

    // added the first before removing him from queue, so the javascript still have access to it in memory
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Faraz");
myQueue.enqueue("Dave");
myQueue.enqueue("Matt");
myQueue.enqueue("Cozz");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);

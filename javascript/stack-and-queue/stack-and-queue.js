class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (!this.top) {
      throw new Error("Stack is empty. Cannot pop from an empty stack.");
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }

  peek() {
    if (!this.top) {
      throw new Error("Stack is empty. Cannot peek an empty stack.");
    }
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      throw new Error("Queue is empty. Cannot dequeue from an empty queue.");
    }
    const dequeuedValue = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.back = null;
    }
    return dequeuedValue;
  }

  peek() {
    if (!this.front) {
      throw new Error("Queue is empty. Cannot peek an empty queue.");
    }
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }
}

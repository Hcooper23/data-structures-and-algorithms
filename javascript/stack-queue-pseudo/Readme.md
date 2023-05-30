## Challenge Title

Implement a Queue using two Stacks.

- Feature Tasks

  - Create a new class called pseudo queue.

    - Methods:
      - enqueue
        - Arguments: value
    - Inserts a value into the PseudoQueue, using a first-in, first-out approach.
      - dequeue
        - Arguments: none
      - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

## Whiteboard Process

![Whiteboard Process](./assets/Screenshot%202023-05-30%20at%205.13.30%20PM.png)

## Approach & Efficiency

1. Create a PseudoQueue class.
2. Inside the PseudoQueue class, create two stack instances: stack1 and stack2.

- Implement the enqueue(value) method:Move all elements from stack1 to stack2 until stack1 is empty.
- Push the new value to stack1.
- Move all elements from stack2 back to stack1 until stack2 is empty.
- Implement the dequeue() method:If stack1 is empty, return null.
- Pop and return the top element from stack1.

3. End of the PseudoQueue class.
This algorithm follows a straightforward approach. When enqueueing, it temporarily moves all elements from stack1 to stack2, inserts the new value to stack1, and then moves all elements back to stack1 from stack2. This ensures that the new value is placed at the bottom of the queue. When dequeuing, it simply pops and returns the top element from stack1.

## Solution

<!-- 'use strict';

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    // Move all elements from stack1 to stack2
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    // Push the new value to stack1
    this.stack1.push(value);

    // Move all elements back to stack1 from stack2
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    // If stack1 is empty, return null
    if (this.stack1.isEmpty()) {
      return null;
    }

    // Pop and return the top element from stack1
    return this.stack1.pop();
  }
} -->

### Collaborators

Worked with Kao Saelor

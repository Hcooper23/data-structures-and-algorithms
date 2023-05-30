// Test cases for Stack
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 20
console.log(stack.pop()); // Output: 10
console.log(stack.isEmpty()); // Output: true

// Test cases for Queue
const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
console.log(queue.peek()); // Output: "A"
console.log(queue.dequeue()); // Output: "A"
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: "B"
console.log(queue.dequeue()); // Output: "C"
console.log(queue.isEmpty()); // Output: true

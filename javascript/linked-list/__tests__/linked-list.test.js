'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

// Test cases
const linkedList = new LinkedList();

// Test 1: Can successfully instantiate an empty linked list
console.log(linkedList.head === null); // Output: true

// Test 2: Can properly insert into the linked list
linkedList.insert('c');
console.log(linkedList.head.value === 'c'); // Output: true

// Test 3: The head property will properly point to the first node in the linked list
linkedList.insert('b');
linkedList.insert('a');
console.log(linkedList.head.value === 'a'); // Output: true

// Test 4: Can properly insert multiple nodes into the linked list
console.log(linkedList.head.next.value === 'b'); // Output: true
console.log(linkedList.head.next.next.value === 'c'); // Output: true

// Test 5: Will return true when finding a value within the linked list that exists
console.log(linkedList.includes('b') === true); // Output: true

// Test 6: Will return false when searching for a value in the linked list that does not exist
console.log(linkedList.includes('d') === false); // Output: true

// Test 7: Can properly return a collection of all the values that exist in the linked list
console.log(linkedList.toArray().join(' -> ') === 'a -> b -> c'); // Output: true

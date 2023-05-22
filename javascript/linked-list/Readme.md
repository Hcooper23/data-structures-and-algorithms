# Challenge Title
- Node

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

- Linked List

  - Create a Linked List class
  - Within your Linked List class, include a head property.
  - Upon instantiation, an empty Linked List should be created.
  - The class should contain the following methods
    - insert
    - Arguments: value
    - Returns: nothing
    - Adds a new node with that value to the head of the list with an O(1) Time performance.

  - Includes:
    - Arguments: value
    - Returns: Boolean
    - Indicates whether that value exists as a Node’s value somewhere within the list.

  - To string
    - Arguments: none
    - Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- 'use strict';
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let result = '';
    while (currentNode) {
      result += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    result += 'NULL';
    return result;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList; -->

## Solution
NPM I then NPM Test.

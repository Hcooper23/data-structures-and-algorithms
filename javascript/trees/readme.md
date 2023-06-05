# Binary Tree and BST Implementation

### Node

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

### Binary Tree

- Create a Binary Tree class
  - Define a method for each of the depth first traversals:
    - pre order
    - in order
    - post order
  -Each depth first traversal method should return an array of values, ordered appropriately.

### Binary Search Tree

- Create a Binary Search Tree class
  - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
  - Add
    - Arguments: value
    - Return: nothing
    - Adds a new node with that value in the correct location in the binary search tree.
  - Contains
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.

## Whiteboard Process

![Whiteboard Process](./assets/Screenshot%202023-05-30%20at%205.13.30%20PM.png)

## Approach & Efficiency

## Solution

<!-- "use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    const results = [];

    const traverse = (node) => {
      results.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return results;
  }

  inOrder() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    const results = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      results.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return results;
  }

  postOrder() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    const results = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };

    traverse(this.root);
    return results;
  }
}

let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

console.log("-------preOrder-------");
let results = tree.preOrder();
console.log("preOrder results:", results);
console.log("-------inOrder-------");
results = tree.inOrder();
console.log("inOrder results:", results);
console.log("-------postOrder-------");
results = tree.postOrder();
console.log("postOrder results:", results); -->

### Collaborators

Worked with Class 401D53 

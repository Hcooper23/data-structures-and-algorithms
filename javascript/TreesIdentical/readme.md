# Trees Identical

## Features

Write a function to determine if two trees are identical or not

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

Any exceptions or errors that come from your code should be contextual, descriptive, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom error that describes what went wrong in calling the methods you wrote for this lab.

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-07-10%20at%205.58.32%20PM.png)

## Approach & Efficiency

## Solution
<!-- class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

let root1, root2;

function areTreesIdentical(a, b) {
  if (a === null && b === null) {
    return true;
  }

  if (a !== null && b !== null) {
    return (
      a.data === b.data &&
      areTreesIdentical(a.left, b.left) &&
      areTreesIdentical(a.right, b.right)
    );
  }

  return false;
}

root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);

root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);

if (areTreesIdentical(root1, root2)) {
  document.write("Both trees are identical");
} else {
  document.write("Trees are not identical");
} -->

### Collaborators

Worked with Class 401D53

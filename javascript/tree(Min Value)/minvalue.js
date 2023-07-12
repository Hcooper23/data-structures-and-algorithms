class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMinimum(root) {
  if (root === null) {
    return null;
  }

  let current = root;
  while (current.left !== null) {
    current = current.left;
  }

  return current;
}

// Create the Binary Search Tree
const root = new Node(8);
root.left = new Node(3);
root.right = new Node(10);
root.left.left = new Node(1);
root.left.right = new Node(6);
root.right.right = new Node(14);
root.left.right.left = new Node(4);
root.left.right.right = new Node(7);

// Find the node with the minimum value
const minimumNode = findMinimum(root);
console.log('Minimum value:', minimumNode.value);

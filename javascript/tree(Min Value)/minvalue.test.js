// Import the necessary code
const { Node, findMinimum } = require('./binarySearchTree');

// Helper function to create BST nodes
function createNode(value) {
  return new Node(value);
}

// Test cases
function runTests() {
  // Test Case 1
  const root1 = createNode(8);
  root1.left = createNode(3);
  root1.right = createNode(10);
  root1.left.left = createNode(1);
  root1.left.right = createNode(6);
  root1.right.right = createNode(14);
  root1.left.right.left = createNode(4);
  root1.left.right.right = createNode(7);

  let minimumNode = findMinimum(root1);
  console.log('Minimum value (Test Case 1):', minimumNode.value); // Expected output: 1

  // Test Case 2
  const root2 = createNode(5);
  root2.left = createNode(3);
  root2.right = createNode(7);
  root2.left.left = createNode(2);
  root2.left.right = createNode(4);
  root2.right.left = createNode(6);

  minimumNode = findMinimum(root2);
  console.log('Minimum value (Test Case 2):', minimumNode.value); // Expected output: 2

  // Test Case 3: Empty BST
  const root3 = null;

  minimumNode = findMinimum(root3);
  console.log('Minimum value (Test Case 3):', minimumNode); // Expected output: null
}

// Run the test cases
runTests();

// Helper function to create a tree
function createTree() {
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  return root;
}

// Test case 1: Identical trees
let tree1 = createTree();
let tree2 = createTree();

if (areTreesIdentical(tree1, tree2)) {
  console.log("Test case 1: Both trees are identical");
} else {
  console.log("Test case 1: Trees are not identical");
}

// Test case 2: Non-identical trees
let tree3 = createTree();
let tree4 = createTree();
tree4.right.data = 6;

if (areTreesIdentical(tree3, tree4)) {
  console.log("Test case 2: Both trees are identical");
} else {
  console.log("Test case 2: Trees are not identical");
}

// Test case 3: One empty tree
let tree5 = createTree();
let tree6 = null;

if (areTreesIdentical(tree5, tree6)) {
  console.log("Test case 3: Both trees are identical");
} else {
  console.log("Test case 3: Trees are not identical");
}

// Test case 4: Both empty trees
let tree7 = null;
let tree8 = null;

if (areTreesIdentical(tree7, tree8)) {
  console.log("Test case 4: Both trees are identical");
} else {
  console.log("Test case 4: Trees are not identical");
}

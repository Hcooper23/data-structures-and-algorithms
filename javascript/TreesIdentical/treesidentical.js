class Node {
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
}

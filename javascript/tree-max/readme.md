## Challenge Title

Write the following method for the Binary Tree class

- find the maximum value
  - Arguments: none
  - Returns: number

Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-06-06%20at%204.51.59%20PM.png)

## Approach & Efficiency

1. Start at the root of the binary tree.
2. Initialize a variable maxValue with the minimum possible value (e.g., -Infinity).
3. Perform a depth-first traversal of the binary tree.
At each node, compare the node's value with the current maxValue.

- If the node's value is greater than maxValue, update maxValue with the node's value.

4. Recursively traverse the left and right child nodes.
5. Once all nodes have been traversed, return the maxValue.

## Solution

<!--
class BinaryTree {

  findMaxValue() {
    if (!this.root) {
      return null;
    }

    let maxValue = -Infinity;

    // Helper function

    function traverse(node) {
      if (!node) {
        return;
      }

      if (node.value > maxValue) {
        maxValue = node.value;
      }

      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    return maxValue;
  }
} -->

### Collaborators

Worked with Coriana Williams

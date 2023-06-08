## Challenge Title

Conduct “FizzBuzz” on a k-ary tree while traversing through it to create a new tree. Set the values of each of the new nodes depending on the corresponding node value in the source tree.

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-06-08%20at%204.07.07%20PM.png)

## Approach & Efficiency

Algorithm

1. Define a Node class to represent each node of the k-ary tree. Each node should have a value and a list of children nodes.
2. Define a function called fizzBuzzTraversal that takes the source tree's root as an argument.
3. Inside the fizzBuzzTraversal function:

- If the current node is None, return None.
- Create a new node for the modified tree with the same value as the current node, but modified according to the "FizzBuzz" rules:
  - If the value is divisible by both 3 and 5, set the new node's value to "FizzBuzz".
  - If the value is divisible by 3, set the new node's value to "Fizz".
  - If the value is divisible by 5, set the new node's value to "Buzz".
- If none of the above conditions are met, set the new node's value to the string representation of the original value.
- Iterate over each child of the current node and recursively call the fizzBuzzTraversal function on each child, assigning the returned node to the new node's children list.
- Return the new node.

4. Call the fizzBuzzTraversal function with the root of the source tree and assign the returned node to the root of the new tree.

## Solution
<!-- 'Use Strict';
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function fizzBuzzTree(root) {
  if (root === null) {
    return null;
  }

  const newRoot = new Node(convertValue(root.value));

  for (const child of root.children) {
    newRoot.children.push(fizzBuzzTree(child));
  }

  return newRoot;
}

function convertValue(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'FizzBuzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else {
    return String(value);
  }
} -->
### Collaborators

Worked with Tim 

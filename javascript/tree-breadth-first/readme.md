## Challenge Title

- Write a function called breadth first
- Arguments: tree
- Return: list of all values in the tree, in the order they were encountered

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-06-07%20at%205.39.05%20PM.png)

## Approach & Efficiency

- declare a function called breadthFirst

- takes tree as an argument

- check if tree exists if not return an empty array

- create a variable called result that starts as an empty array(this will store the values encountered in the tree)

- create a variable called queue as an empty array that will store nodes.

- loop through until queue is empty

- remove first node from queue, assign it to node

- push value of node to result array

- if node has a left child, push left child to queue

- if node has a right child, push right child to queue

- result array at this point should contain all the values encountered

- return the result array

## Solution
<!-- function breadthFirst(tree) {

  if (!tree) {

    return [];

  }

  var result = [];

  var queue = [];

  queue.push(tree);

  while (queue.length > 0) {

    var node = queue.shift();

    result.push(node.value);

    if (node.left) {

      queue.push(node.left);

    }

    if (node.right) {

      queue.push(node.right);

    }

  }

  return result;

} -->
### Collaborators

Worked with Kaeden O' Meara

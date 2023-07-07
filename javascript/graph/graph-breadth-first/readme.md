# Graph Breadth First

## Features

Write the following method for the Graph class:

- breadth first
- Arguments: Node
- Return: A collection of nodes in the order they were visited.
- Display the collection

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define.

Ensure your tests are passing before you submit your solution.

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-07-06%20at%209.38.15%20PM.png)

## Approach & Efficiency

<!-- class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(value) {
    if (!this.adjList[value]) {
      this.adjList[value] = [];
    }
  }

  addEdge(startNode, endNode) {
    if (this.adjList[startNode] && this.adjList[endNode]) {
      this.adjList[startNode].push(endNode);
      this.adjList[endNode].push(startNode);
    }
  }

  breadthFirst(startNode) {
    const visited = {};
    const result = [];

    const queue = [];
    queue.push(startNode);
    visited[startNode] = true;

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node);

      const neighbors = this.adjList[node];
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }

    return result;
  }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log(graph.breadthFirst(1)); // [1, 2, 3, 4]
console.log(graph.breadthFirst(2)); // [2, 1, 4, 3]
console.log(graph.breadthFirst(3)); // [3, 1, 4, 2]
console.log(graph.breadthFirst(4)); // [4, 2, 3, 1] -->

## Solution

### Collaborators

Worked with Class 401D53

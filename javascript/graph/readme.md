# Hashmap Left Join

## Features

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
  - Empty collection returned if there are no nodes
- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection
  - Empty collection returned if there are no nodes
- size
  - Arguments: none
  - Returns the total number of nodes in the graph
  - 0 if there are none

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

Any exceptions or errors that come from your code should be contextual, descriptive, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom error that describes what went wrong in calling the methods you wrote for this lab.

Write tests to prove the following functionality:

1. Node can be successfully added to the graph
2. An edge can be successfully added to the graph
3. A collection of all nodes can be properly retrieved from the graph
4. All appropriate neighbors can be retrieved from the graph
5. Neighbors are returned with the weight between nodes included
6. The proper size is returned, representing the number of nodes in the graph
7. A graph with only one node and edge can be properly returned

Ensure your tests are passing before you submit your solution.

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-07-03%20at%205.58.53%20PM.png)

## Approach & Efficiency

## Solution
<!-- class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(value) {
    this.nodes.push(value);
  }

  addEdge(node1, node2, weight = 1) {
    if (!this.nodes.includes(node1) || !this.nodes.includes(node2)) {
      throw new Error('Both nodes should already be in the graph.');
    }

    if (!this.edges[node1]) {
      this.edges[node1] = [];
    }
    if (!this.edges[node2]) {
      this.edges[node2] = [];
    }

    this.edges[node1].push({ node: node2, weight });
    this.edges[node2].push({ node: node1, weight });
  }

  getNodes() {
    return this.nodes;
  }

  getNeighbors(node) {
    if (!this.nodes.includes(node)) {
      throw new Error('The node does not exist in the graph.');
    }

    return this.edges[node] || [];
  }

  size() {
    return this.nodes.length;
  }
}

module.exports = Graph; -->
### Collaborators

Worked with Class 401D53

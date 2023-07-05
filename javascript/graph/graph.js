class Graph {
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

module.exports = Graph;

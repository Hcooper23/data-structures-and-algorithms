"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    const results = [];

    const traverse = (node) => {
      results.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return results;
  }

  inOrder() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    const results = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      results.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return results;
  }

  postOrder() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    const results = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };

    traverse(this.root);
    return results;
  }

  contains(value) {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    let found = false;

    const traverse = (node) => {
      if (node.value === value) {
        found = true;
        return;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return found;
  }
}

// Test cases
describe("Tree", () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
  });

  it("should instantiate an empty tree", () => {
    expect(tree.root).toBeNull();
  });

  it("should instantiate a tree with a single root node", () => {
    tree.root = new Node(10);
    expect(tree.root).toEqual(expect.any(Node));
    expect(tree.root.value).toBe(10);
  });

  describe("Binary Search Tree", () => {
    beforeEach(() => {
      tree.root = new Node(10);
    });

    it("should add left and right children properly to a node", () => {
      tree.root.left = new Node(5);
      tree.root.right = new Node(15);

      expect(tree.root.left).toEqual(expect.any(Node));
      expect(tree.root.left.value).toBe(5);

      expect(tree.root.right).toEqual(expect.any(Node));
      expect(tree.root.right.value).toBe(15);
    });
  });

  describe("Traversals", () => {
    beforeEach(() => {
      tree.root = new Node(10);
      tree.root.left = new Node(5);
      tree.root.right = new Node(15);
      tree.root.left.left = new Node(1);
      tree.root.left.right = new Node(8);
      tree.root.right.right = new Node(17);
    });

    it("should return a collection from pre-order traversal", () => {
      const expected = [10, 5, 1, 8, 15, 17];
      expect(tree.preOrder()).toEqual(expected);
    });

    it("should return a collection from in-order traversal", () => {
      const expected = [1, 5, 8, 10, 15, 17];
      expect(tree.inOrder()).toEqual(expected);
    });

    it("should return a collection from post-order traversal", () => {
      const expected = [1, 8, 5, 17, 15, 10];
      expect(tree.postOrder()).toEqual(expected);
    });
  });

  describe("contains", () => {
    beforeEach(() => {
      tree.root = new Node(10);
      tree.root.left = new Node(5);
      tree.root.right = new Node(15);
      tree.root.left.left = new Node(1);
      tree.root.left.right = new Node(8);
      tree.root.right.right = new Node(17);
    });

    it("should return true when the tree contains the value", () => {
      expect(tree.contains(5)).toBe(true);
      expect(tree.contains(17)).toBe(true);
    });

    it("should return false when the tree does not contain the value", () => {
      expect(tree.contains(3)).toBe(false);
      expect(tree.contains(20)).toBe(false);
    });
  });
});

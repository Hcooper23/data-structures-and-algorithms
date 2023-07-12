#include <iostream>

// Assuming the Node and Solution classes are defined here

int main() {
    // Create the BST
    Node* root = new Node(5);
    root->left = new Node(3);
    root->right = new Node(7);
    root->left->left = new Node(2);
    root->left->right = new Node(4);
    root->right->left = new Node(6);
    root->right->right = new Node(8);

    Solution solution;

    // Test Case 1: K = 1
    int k1 = 1;
    int result1 = solution.KthSmallestElement(root, k1);
    std::cout << "Kth Smallest Element for K = " << k1 << ": " << result1 << std::endl;
    // Expected Output: 2

    // Test Case 2: K = 3
    int k2 = 3;
    int result2 = solution.KthSmallestElement(root, k2);
    std::cout << "Kth Smallest Element for K = " << k2 << ": " << result2 << std::endl;
    // Expected Output: 4

    // Test Case 3: K = 6
    int k3 = 6;
    int result3 = solution.KthSmallestElement(root, k3);
    std::cout << "Kth Smallest Element for K = " << k3 << ": " << result3 << std::endl;
    // Expected Output: 7

    // Clean up the memory (delete the nodes)
    // ...

    return 0;
}

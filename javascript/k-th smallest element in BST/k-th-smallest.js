class Solution {
  public:
      int count = 0;
      int result = 0;

      // Return the Kth smallest element in the given BST
      int KthSmallestElement(Node* root, int K) {
          traverse(root, K);
          return result;
      }

      void traverse(Node* node, int K) {
          if (node == nullptr) return;
          traverse(node->left, K);
          count++;
          if (count == K) {
              result = node->data;
              return;
          }
          traverse(node->right, K);
      }
  };

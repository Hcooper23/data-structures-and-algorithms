# Linked-List-Zip

## Challenge Title

Write a function called zip lists
Arguments: 2 linked lists
Return: New Linked List, zipped as noted below
Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
Try and keep additional space down to O(1)

## Whiteboard Process

![Whiteboard Process](/javascript/llinked-list-zip/linked-list-zip.png)

## Approach & Efficiency

Zipped List
Define 3 pointers:
Pointer 1=  current list 1
Pointer 2= current list 2
Pointer 3= current list 3

While List 1 and L2 have not reached their end, do the following:

Take the current node from List 1 and copy into Zip 3
Take the current node from List 2 and copy into Zip 3
Move current from List 1 to next
Move current from List 2 to next

Repeat

## Solution

<!-- class Solution {
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
  };  -->

### Collaborators


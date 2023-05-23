class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k) {
    if (!this.head) {
      throw new Error('Linked List is empty.');
    }

    let slow = this.head;
    let fast = this.head;

    // Move the fast pointer k nodes ahead of the slow pointer
    for (let i = 0; i < k; i++) {
      if (fast.next) {
        fast = fast.next;
      } else {
        throw new Error(`Invalid value of k: ${k}. The list has fewer than k nodes.`);
      }
    }

    // Move both slow and fast pointers until fast reaches the end of the list
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    // The slow pointer is now k nodes from the tail
    return slow.value;
  }
}

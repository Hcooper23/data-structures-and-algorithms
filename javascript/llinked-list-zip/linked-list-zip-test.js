class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function zipLists(list1, list2) {
  let dummy = new Node(0); // Dummy node to simplify the implementation
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    current.next = list1;
    list1 = list1.next;
    current = current.next;

    current.next = list2;
    list2 = list2.next;
    current = current.next;
  }

  // If one list is longer than the other, append the remaining nodes
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  return dummy.next; // Return the head of the zipped list
}

// Node initialization
let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(2);

let list2 = new Node(5);
list2.next = new Node(9);
list2.next.next = new Node(4);

// Call zipLists
let zippedList = zipLists(list1, list2);

// Print the zipped list for verification
let current = zippedList;
let result = "";
while (current !== null) {
  result += current.value + " -> ";
  current = current.next;
}
result += "null";
console.log(result);

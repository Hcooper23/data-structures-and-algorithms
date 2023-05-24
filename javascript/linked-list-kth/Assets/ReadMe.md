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

- Code
<!-- ziplist(list1, list2){
  let current1 = list1.head;
  let current2 = list2.head;
  let newList = new LinkedList();
  while (current1 || current2) {
      if (current1) {
          newList.append(current1.value);
          current1 = current1.next;
      }
      if (current2) {
          newList.append(current2.value);
          current2 = current2.next;
      }
  }
  return newList; -->

### Collaborators

Worked with Eva Grace Smith
Chat Gpt For Test Writing

## Odomoter

Given a linked a list of positive single digit numbers, write a method that adds 1 to the number represented to the list like an odometer.


## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-07-12%20at%204.27.19%20PM.png)

## Approach & Efficiency

Odometer will begin with a value of 0 and have
A maximum value of 9.
Given an input starting value of 4395, begin by reversing the linked list
and assigning the original 4th node to become the 1st node in the data while still representing
these as single digits adding onto the 4th Node.
You will increase the value of the 1st node by one until
reaching the value of 9.
Then continue the addition onto the 2nd node and increase
to maximum of 9.
Followed by the 3rd and 4th node will follow same pattern
stated above.
Then to return the list back to the original format we ned to perform another reversal that will
output the list as 1st, 2nd, 3rd, 4th nodes. Then the results will be the next chronological number
following this pattern and returning the Output.

## Solution

<!-- function addOne (head) {
let prev= null;
let current= head;
while (current) {
const nextNode = current.node;
current.next= prev;
prev = current;
current = nextNode;
}
head = prev

Let carry= 1;
current = head;
while (current) {
const (sumValue = current.Value + carry;
carry = Math.Floor (sumValue + carry)

}

Return sumValue

Console.log = current
Console.log = sumValue
Console.log =
}; -->

### Collaborators

Kassie Bradshaw

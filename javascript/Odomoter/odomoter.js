function addOne (head) {
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

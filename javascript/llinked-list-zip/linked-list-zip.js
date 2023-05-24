ziplist(list1, list2){
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
  return newList;

function printLinkedList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

printLinkedList({
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null,
    },
  },
});

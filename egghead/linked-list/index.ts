type ListNode = {
  value: string;
  next: ListNode | null;
};

type LinkedList = {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  push(value: string): ListNode;
  pop(): ListNode | null;
  get(index: number): void;
  delete(index: number): void;
  isEmpty(): boolean;
  print(): void;
};

function createNode(value: string): ListNode {
  return { value, next: null };
}

function createLinkedList(): LinkedList {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value: string) {
      const node = createNode(value);

      // if list is empty, create a node as head and tail
      if (!this.head || !this.tail) {
        this.head = node;
        this.tail = node;
        this.length++;

        return node;
      }

      // list not empty
      // add new node to the end
      this.tail.next = node;
      // set the tail to the new node
      this.tail = node;
      this.length++;

      // return node to keep a reference to it
      return node;
    },
    pop() {
      if (this.isEmpty()) return null;

      // get the last node
      const node = this.tail;

      // one node
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      // find penultimate, then point tail to it
      let penultimate = null;
      let current = this.head as ListNode; // definitely there are two nodes

      while (current.next) {
        penultimate = current;
        current = current.next;
      }

      // set the last node to null and point the tail to penultimate
      penultimate!.next = null; // we surely have penultimate
      this.tail = penultimate;
      this.length--;

      // pop the tail
      return node;
    },
    get(index: number) {
      if (index < 0 || index > this.length - 1) {
        console.log('Invalid index');
        return null;
      }

      // first item
      if (index === 0) return this.head;
      if (index === this.length) return this.tail;

      let i = 0;
      let current = this.head;

      while (i < index) {
        // there is current.next since we check index <= list.length
        i++;
        current = current!.next;
      }

      return current;
    },
    delete(index: number) {
      return;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      const values = [];
      let i = 0;
      let current = this.head;
      while (i < this.length && current) {
        i++;
        values.push(current.value);
        current = current!.next;
      }

      console.log(values.join(' => '));
    },
  };
}

const list = createLinkedList();
const item1 = list.push('1');
const item2 = list.push('2');
const item3 = list.push('3');
const item4 = list.push('4');
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
list.print();
// console.log(got);
// console.log(list.length);
// const popped = list.pop();
// console.log('tail', list.tail);
// console.log(list.length);
// list.pop();
// console.log('tail', list.tail);
// console.log(list.length);

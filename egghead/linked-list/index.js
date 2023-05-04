function createNode(val) {
  return {
    val,
    next: null,
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(val) {
      const node = createNode(val);
      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }

      this.tail.next = node;
      this.tail = node;
      this.length++;
      return node;
    },
    pop() {
      // empty list
      if (this.isEmpty()) return null;

      const node = this.tail;
      // one item
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      let current = this.head;
      let penultimate;
      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }

        current = current.next;
      }

      penultimate.next = null;
      this.tail = penultimate;

      this.length--;
      return node;
    },
    get(index) {
      if (index < 0 || index > this.length) return null;
      if (index === 0) return this.head;

      let current = this.head;
      let i = 0;

      while (i < index) {
        i++;
        current = current.next;
      }

      return current;
    },
    delete(index) {
      if (index < 0 || index > this.length) return null;

      if (index === 0) {
        const toBeDeleted = this.head;

        this.head = this.head.next;
        this.length--;

        return toBeDeleted;
      }

      let current = this.head;
      let previous;
      let i = 0;

      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      const deleted = current;
      previous.next = current.next;
      this.length--;
      return deleted;
    },
    print() {
      const values = [];
      let current = this.head;

      while (current) {
        values.push(current.val);
        current = current.next;
      }

      console.log(values.join(' => '));
    },
    isEmpty() {
      return this.length === 0;
    },
  };
}

const list = createLinkedList();
const values = ['a', 'b', 'c', 'd', 'e', 'f'];
const nodes = values.map((val) => list.push(val));

list.print();
list.pop();
list.print();
list.pop();
list.print();
list.pop();
list.print();
list.pop();

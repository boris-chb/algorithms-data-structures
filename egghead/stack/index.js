function createStack() {
  const arr = [];

  return {
    push(item) {
      arr.push(item);
    },
    pop() {
      if (!arr.isEmpty()) {
        return arr.pop();
      }
    },
    peek() {
      if (arr.length === 0) {
        console.log('Stack is empty');
        return null;
      }
      return arr[arr.length - 1];
    },
    get length() {
      return arr.length;
    },
    isEmpty() {
      return arr.length === 0;
    },
  };
}

const s = createStack();

console.log(s.peek());
s.push(1);
s.push([2, 3]);
console.log(s.peek());
console.log(s.len2());
console.log(s.length);

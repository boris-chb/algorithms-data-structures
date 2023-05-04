"use strict";
function createNode(value) {
    return { value, next: null };
}
function createLinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        push(value) {
            const node = createNode(value);
            // if list is empty, create a node as head and tail
            if (!this.head || !this.tail) {
                this.head = node;
                this.tail = node;
                return node;
            }
            // list not empty
            // add new node to the end
            this.tail.next = node;
            // set the tail to the new node
            this.tail = node;
            // return node to keep a reference to it
            return node;
        },
        pop() {
            if (this.isEmpty())
                return null;
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
            let current = this.head; // definitely there are two nodes
            while (current.next) {
                penultimate = current;
                current = current.next;
            }
            // set the last node to null and point the tail to penultimate
            penultimate.next = null; // we surely have penultimate
            this.tail = penultimate;
            this.length--;
            // pop the tail
            return node;
        },
        get(index) { },
        delete(index) {
            return;
        },
        isEmpty() {
            return this.length === 0;
        },
        print() { },
    };
}
const list = createLinkedList();
list.push('1');
list.print();

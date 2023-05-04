"use strict";
/*
Write a function that takes the head of a linked list as an argument and returns the middle node of the linked list. If the linked list has an even number of nodes, return the second of the two middle nodes.

For example, given the linked list 1 -> 2 -> 3 -> 4 -> 5, the function should return the node with value 3. If the linked list is 1 -> 2 -> 3 -> 4 -> 5 -> 6, the function should return the node with value 4.
*/
function findMiddleNode(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

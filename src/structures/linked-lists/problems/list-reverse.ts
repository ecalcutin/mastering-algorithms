/**
 * Reverse a Singly Linked List
 * Given a singly linked list, reverse it (change the order of the nodes to be in reverse) and return the new head of the list.
 */

import { SinglyLinkedList as ListNode } from '../singly-linked-list';

export const reverseList = <T>(head: ListNode<T>): ListNode<T> => {
  let iterator = head;
  let result: ListNode<T> | null = null;

  do {
    result = new ListNode(iterator.value, result);
    iterator = iterator.next;
  } while (iterator);

  return result;
};

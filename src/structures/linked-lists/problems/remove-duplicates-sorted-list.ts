/**
 * Remove duplicates from sorted list
 * Given a sorted singly linked list that may contain duplicates, remove them, keeping only unique elements without creating a new list.
 */

import { SinglyLinkedList as ListNode } from '../singly-linked-list';

export const removeDuplicates = <T>(head: ListNode<T>): ListNode<T> => {
  let iterator = head;

  while (iterator && iterator.next) {
    if (iterator.value === iterator.next.value) {
      iterator.next = iterator.next.next;
    }

    iterator = iterator.next;
  }

  return head;
};

/**
 * Palindrome Linked List
 * Given a singly linked list head, determine if it is a palindrome (reads the same forward and backward).
 *
 * Input:
 *      head = 1 → 2 → 2 → 1
 * Output: true
 *
 * Input:
 *      head = 1 → 2 → 3 → 4
 * Output: false
 *
 * Even Length List: Two middle nodes exist. Typically, we return the first middle node (which slow points to when fast reaches null).
 * A simple approach is to store all values in an array and check if it is a palindrome (O(n) time, O(n) space). This algo has O(1) space.
 */

import { SinglyLinkedList as ListNode } from '../singly-linked-list';

export const isPalindrome = <T>(head: ListNode<T>): boolean => {
  let slow = head;
  let fast = head;

  // Step 1: Find the middle using fast & slow pointers
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Move slow to the first node of the second half in even-length cases
  if (fast !== null) {
    slow = slow.next;
  }

  // Step 3: Reverse the second half
  let current: ListNode<T> | null = slow;
  let prev: ListNode<T> | null = null;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Step 4: Compare the first half with the reversed second half
  let left: ListNode<T> | null = head;
  let right: ListNode<T> | null = prev; // 'prev' is now the head of reversed second half

  while (right) {
    if (left.value !== right.value) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
};

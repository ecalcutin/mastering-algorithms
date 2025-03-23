import { SinglyLinkedList as ListNode } from '../singly-linked-list';
import { isPalindrome } from './is-palindrome';

describe('Check if linked list is a palindrome', () => {
  it('should return true if linked list (odd) is palindrome', () => {
    const items = [1, 2, 3, 2, 1];

    const head = ListNode.fromArray(items);
    const result = isPalindrome(head);

    expect(result).toBe(true);
  });

  it('should return true if linked list (even) is palindrome', () => {
    const items = [1, 2, 3, 3, 2, 1];

    const head = ListNode.fromArray(items);
    const result = isPalindrome(head);

    expect(result).toBe(true);
  });

  it('should return false if linked list (odd) is not palindrome', () => {
    const items = [1, 2, 3, 1, 1];

    const head = ListNode.fromArray(items);
    const result = isPalindrome(head);

    expect(result).toBe(false);
  });

  it('should return false if linked list (even) is not palindrome', () => {
    const items = [1, 2, 3, 3, 1, 1];

    const head = ListNode.fromArray(items);
    const result = isPalindrome(head);

    expect(result).toBe(false);
  });
});

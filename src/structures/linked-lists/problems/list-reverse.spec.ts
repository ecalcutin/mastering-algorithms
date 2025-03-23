import { SinglyLinkedList as ListNode } from '../singly-linked-list';
import { reverseList } from './list-reverse';

describe('Reverse a Singly Linked List', () => {
  it('should return reversed linked list', () => {
    const head = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = reverseList(head);

    expect(ListNode.toArray(head)).toStrictEqual(
      ListNode.toArray(result).reverse(),
    );
  });
});

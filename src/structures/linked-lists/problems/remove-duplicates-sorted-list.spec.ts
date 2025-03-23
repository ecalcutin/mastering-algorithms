import { SinglyLinkedList as ListNode } from '../singly-linked-list';
import { removeDuplicates } from './remove-duplicates-sorted-list';

describe('Remove duplicates from sorted list', () => {
  it('should remove duplicates in sorted linked list', () => {
    const items = [1, 2, 2, 3, 3];

    const head = ListNode.fromArray(items);
    removeDuplicates(head);

    expect(ListNode.toArray(head)).toStrictEqual([1, 2, 3]);
  });
});

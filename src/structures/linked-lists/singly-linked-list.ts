export class SinglyLinkedList<T> {
  public next: SinglyLinkedList<T> | null;
  public value: T;

  constructor(value: T, next: SinglyLinkedList<T> = null) {
    this.value = value;
    this.next = next;
  }

  public static fromArray<T>(array: Array<T>): SinglyLinkedList<T> {
    const [first, ...rest] = array;

    const head = new SinglyLinkedList(first);
    let iterator = head;

    for (let item of rest) {
      iterator.next = new SinglyLinkedList(item);
      iterator = iterator.next;
    }

    return head;
  }

  public static toArray<T>(head: SinglyLinkedList<T>): Array<T> {
    const array: Array<T> = [];
    let iterator = head;

    while (iterator) {
      array.push(iterator.value);
      iterator = iterator.next;
    }
    return array;
  }
}

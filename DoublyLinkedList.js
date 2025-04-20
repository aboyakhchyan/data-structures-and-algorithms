class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
    this._prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  push_front(value) {
    const node = new Node(value);

    if (this._head === null) {
      this._head = this._tail = node;
    } else {
      node._next = this._head;
      this._head._prev = node;
      this._head = node;
    }
  }

  pop_front() {
    if (this._head === null) return;

    if (this._head === this._tail) {
      this._head = this.tail = null;
    } else {
      this._head = this._head._next;
      this._head._prev = null;
    }
  }

  push_back(value) {
    const node = new Node(value);

    if (this._tail === null) {
      this._head = this._tail = node;
    } else {
      node._prev = this._tail;
      this._tail._next = node;
      this._tail = node;
    }
  }

  pop_back() {
    if (this._tail === null) return;

    if (this._tail === this._head) {
      this.tail = this._head = null;
    } else {
      this._tail = this._tail._prev;
      this._tail._next = null;
    }
  }

  front() {
    return this._head._value;
  }

  back() {
    return this._tail._value;
  }

  toString() {
    let result = "null <--> ";
    let current = this._head;

    while (current) {
      result += `${current._value} <--> `;

      current = current._next;
    }
    result += "null";

    return result;
  }
}

const dList = new DoublyLinkedList();
// dList.push_front(14);
dList.push_front(16);
dList.push_front(15);
dList.push_back(16);
dList.push_back(15);
dList.push_back(19);
dList.pop_back();
// dList.pop_front();

console.log(dList.toString());
console.log(dList.front());
console.log(dList.back());

function isPalindrome(list) {
  let current1 = list._head;
  let current2 = list._tail;

    while(current1 !== current2) {
      if(current1._value !== current2._value) {
        return false
      }

      current1 = current1._next;
      current2 = current2._prev;
    }

    return true;
}

console.log(isPalindrome(dList));
/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail = newNode;
    }
    this.tail = newNode;
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tall = null;
    }
    return current.val;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null
    }
    return shiftedNode.val;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    let count = 0;
    let current = this.head;
    while (count !== idx) {
      current = current.next;
      count++;
    }
    current.val = val;
    return true;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) {
      this.unshift(val);
      return true;
    }
    if (idx === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let count = 0;
    let current = this.head;
    let prevNode = null;
    while (count !== idx) {
      prevNode = current;
      current = current.next;
      count++;    
    }
    prevNode.next = newNode;
    newNode.next = current;
    this.length++;
    return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if(idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let count = 0;
    let current = this.head;
    let prevNode = null;
    while (count !== idx) {
      prevNode = current;
      current = current.next;
      count++;
    }
    prevNode.next = current.next;
    this.length--;
    return current.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length == 0) return 0;
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;

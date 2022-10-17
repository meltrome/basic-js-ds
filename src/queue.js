const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 * -> 1 -> 3 
 * (3) -> 1 
 */
class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
    this.items = [];
  }

  getUnderlyingList() {
    return { "value": this.dequeue.items, "next": this.head };
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.items.length == 0) {return "Queue is empty";}
    return this.items.shift();
  }
}

module.exports = {
  Queue
};

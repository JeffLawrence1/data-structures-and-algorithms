    
'use strict';

const stacksAndQueues = require('../tree');


describe('Stack and Queues Tests', () => {
  let Stack = stacksAndQueues.Stack;
  let Queue = stacksAndQueues.Queue;

  describe('Stack testing', () => {

    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it('Can successfully push onto a stack', () => {
      stack.push(2);
      expect(stack.top.val).toBe(2);
    });

    it('Can successfully push multiple nodes onto a stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.top.val).toBe(3);
    });

    it('Can successfully pop off the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.top.val).toBe(2);
    });

    it('Can successfully empty a stack after multiple pops', () => {
      stack.push(1);
      stack.push(2);
      stack.pop();
      stack.pop();
      expect(stack.top).toBeNull();
    });

    it('Can successfully peek the next item on the stack.', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).toBe(2);
    });

    it('Can successfully instantiate an empty stack', () => {
      expect(stack).toBeInstanceOf(Stack);
      expect(stack.peek()).toBeNull();
    });
  });

  describe('Queue Testing', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it('Can successfully enqueue into a queue', () => {
      queue.enqueue(1);
      expect(queue.front.val).toBe(1);
    });

    it('Can successfully enqueue multiple values into a queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.front.val).toBe(1);
      expect(queue.front.next.val).toBe(2);
      expect(queue.front.next.next.val).toBe(3);
    });

    it('Can successfully dequeue out of a queue the expected value', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue();
      expect(queue.front.val).toBe(2);
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).toBe(1);
    });

    it('Can successfully empty a queue after multiple dequeues', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue).toBeInstanceOf(Queue);
      expect(queue.front).toBeNull();
    });

    it('Can successfully instantiate an empty queue', () => {
      expect(queue).toBeInstanceOf(Queue);
      expect(queue.peek()).toBeNull();
    });
  });

});

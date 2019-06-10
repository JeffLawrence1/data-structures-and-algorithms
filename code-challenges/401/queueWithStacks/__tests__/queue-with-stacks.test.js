'use strict';

const QueueWithStacks = require('../queue_with_stacks.js');


describe('Queue with Stacks Tests', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new QueueWithStacks();
  });

  it('should actually work', () => {
    expect(pseudoQueue).toBeDefined();
    expect(pseudoQueue).toBeInstanceOf(QueueWithStacks);
  });

  it('should create two stacks', () => {
    expect(pseudoQueue.stack1).toBeDefined();
    expect(pseudoQueue.stack2).toBeDefined();
  });

  it('Can successfully push onto a stack', () => {
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.stack1.peek()).toEqual(2);
  });

  it('Can successfully push multiple nodes onto a stack', () => {
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(12);
    pseudoQueue.enqueue(22);
    expect(pseudoQueue.stack1.peek()).toEqual(22);
  });

  it('Can successfully dequeue one val', () => {
    pseudoQueue.enqueue(12);
    pseudoQueue.enqueue(22);
    expect(pseudoQueue.dequeue()).toEqual(12);
    expect(pseudoQueue.stack2.top.val).toEqual(22);
  });

  it('Can successfully dequeue multiple vals', () => {
    pseudoQueue.enqueue(12);
    pseudoQueue.enqueue(22);
    pseudoQueue.enqueue(32);
    expect(pseudoQueue.dequeue()).toEqual(12);
    expect(pseudoQueue.dequeue()).toEqual(22);
    expect(pseudoQueue.dequeue()).toEqual(32);
  });
});

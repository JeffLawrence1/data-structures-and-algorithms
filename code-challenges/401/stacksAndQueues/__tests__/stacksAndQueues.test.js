    
'use strict';

const stacksAndQueues = require('../stacks-and-queues');


describe('Stack and Queues Tests', () => {
  let Stack = stacksAndQueues.Stack;

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
  });

});

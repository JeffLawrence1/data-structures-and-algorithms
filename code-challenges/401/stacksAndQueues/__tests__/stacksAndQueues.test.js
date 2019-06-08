    
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

  });

});

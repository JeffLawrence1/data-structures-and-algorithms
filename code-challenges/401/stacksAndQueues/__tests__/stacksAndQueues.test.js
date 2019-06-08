    
'use strict';

const stacksAndQueues = require('../stacksAndQueues.js');


describe('Stack and Queues Tests', () => {

  describe('Stack testing', () => {

    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it('Can successfully push onto a stack', () => {
      stack.push(2);
      expect(stack.top.value).toBe(2);
    });

  });

});

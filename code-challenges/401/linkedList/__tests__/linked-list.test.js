'use strict';

const linkedList = require('../linked-list.js');

describe('Singly Linked List Module', () => {

  let newList = new linkedList();
  let one = newList.insert(1);
  let two = newList.insert(2);
  let three = newList.insert(3);

  it('Can successfully instantiate an empty linked list', () => {
    
    expect(newList).toBeDefined();
  });

  it('Can properly insert into the linked list', () => {
    newList.insert(1);

    expect(newList.insert(1)).toEqual(1);
  });
  
  it('should only take a array as first param', () => {
    expect(arrayShift(testVal, val)).toBeNull();
  });
});

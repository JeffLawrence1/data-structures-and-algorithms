'use strict';

const linkedList = require('../linked-list.js');

describe('Singly Linked List Module', () => {

  let newList = new linkedList();


  it('Can successfully instantiate an empty linked list', () => {
    
    expect(newList).toBeDefined();
  });

  it('Can properly insert into the linked list', () => {
    newList.insert(1);

    expect(newList.insert(1)).toEqual(1);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    newList.insert(2);
    expect(newList.head.val).toEqual(2);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.head.next.next.val).toEqual(1);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    newList.insert(11);
    newList.insert(22);
    newList.insert(33);
    expect(newList.includes(22)).toEqual(true);
  });

  it('Will NOT return true when finding a value within the linked list that exists', () => {
    newList.insert(11);
    newList.insert(22);
    newList.insert(33);
    expect(newList.includes(12)).toEqual(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {

    expect(newList.print()).toEqual([33, 22, 11, 33, 22, 11, 3, 2, 1, 2, 1, 1]);
  });
});

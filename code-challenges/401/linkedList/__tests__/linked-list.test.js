'use strict';

const linkedList = require('../linked-list.js');

describe('Singly Linked List Module', () => {

  let newList;

  beforeEach(() => {
    newList = new linkedList();
  });

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

  describe('print', () => {
    it('should console.log once for every item in List', () => {
      let mockConsoleLog = jest.spyOn(console, 'log');
      mockConsoleLog.mockImplementation(() => true);

      //act
      newList.print();

      //assert
      expect(mockConsoleLog).not.toBeCalled();
      // expect(mockConsoleLog).toBeCalled();
    });
  });

  describe('append', () => {
    it('Can successfully add a node to the end of the linked list', () => {
      newList.insert(22);
      newList.append(11);
      expect(newList.head.next.val).toEqual(11);

    });

    it('Can successfully add a node to the beginning of the linked list', () => {
      newList.append(11);
      expect(newList.head.val).toEqual(11);

    });

    it('Can successfully add multiple nodes to the end of a linked list', () => {
      newList.insert(22);
      newList.append(11);
      newList.append(1);
      expect(newList.head.next.val).toEqual(11);
      expect(newList.head.next.next.val).toEqual(1);

    });
  });

  describe('insertBefore', () => {
    it('Can successfully insert a node before a node located in the middle of a linked list', () => {
      newList.insert(11);
      newList.insert(22);
      newList.insert(33);
      newList.insertBefore(22, 2);
      expect(newList.head.next.val).toEqual(2);

    });

    it('Can successfully insert a node before the first node of a linked list', () => {
      newList.insert(11);
      newList.insert(22);
      newList.insert(33);
      newList.insertBefore(33, 2);
      expect(newList.head.val).toEqual(2);
    });
  });

  describe('insertAfter', () => {
    it('Can successfully insert after a node in the middle of the linked list', () => {
      newList.insert(11);
      newList.insert(22);
      newList.insert(33);
      newList.insertAfter(22, 2);
      expect(newList.head.next.next.val).toEqual(2);

    });

    it('Can successfully insert a node after the last node of the linked list', () => {
      newList.insert(11);
      newList.insert(22);
      newList.insert(33);
      newList.insertAfter(11, 2);
      expect(newList.head.next.next.next.val).toEqual(2);
    });
  });

  describe('kthFromEnd', () => {
    it('Where k is greater than the length of the linked list', () => {
      let node3 = {val: 3, next: null};
      let node2 = {val: 2, next: node3};
      let node1 = {val: 1, next: node2};
      newList.head = node1;
      newList.length = 3;
      console.log(newList);
      expect(newList.kthFromEnd(5)).toEqual('index not here!!!');
    });

    it('Where k and the length of the list are the same', () => {
      let node3 = {val: 3, next: null};
      let node2 = {val: 2, next: node3};
      let node1 = {val: 1, next: node2};
      newList.head = node1;
      newList.length = 3;
      console.log(newList);
      expect(newList.kthFromEnd(3)).toEqual(1);
    });

    it('Where k is not a positive integer', () => {
      let node3 = {val: 3, next: null};
      let node2 = {val: 2, next: node3};
      let node1 = {val: 1, next: node2};
      newList.head = node1;
      newList.length = 3;
      console.log(newList);
      expect(newList.kthFromEnd(-3)).toEqual('index not here!!!');
    });

    it('Where the linked list is of a size 1', () => {

      let node1 = {val: 1, next: null};
      newList.head = node1;
      newList.length = 1;
      expect(newList.kthFromEnd(1)).toEqual(1);
    });

    it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
      let node3 = {val: 3, next: null};
      let node2 = {val: 2, next: node3};
      let node1 = {val: 1, next: node2};
      newList.head = node1;
      newList.length = 3;
      // console.error(newList.kthFromEnd(0));
      expect(newList.kthFromEnd(1)).toEqual(2);
    });
  });
});

// let node1 = {value: 1, next: node2};
// let node2 = {value: 2, next: node3};
// let node3 = {value: 3, next: null};

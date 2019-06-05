'use strict';

const linkedList = require('../../linkList/linked-list.js');
const mergeList = require('../ll-merge.js');

describe('mergedList module', () => {

  let newList1;
  let newList2;

  beforeEach(() => {
    newList1 = new linkedList();
    newList2 = new linkedList();
  });

  it('It can merge two linked lists', () => {
    let node3 = {val: 3, next: null};
    let node2 = {val: 2, next: node3};
    let node1 = {val: 1, next: node2};
    newList.head = node1;
    newList.length = 3;
    // console.error(newList.kthFromEnd(0));
    expect(newList.kthFromEnd(1)).toEqual(2);
  });
});

'use strict';

const linkedList = require('../../linkedList/linked-list.js');
const mergeList = require('../ll-merge.js');

describe('mergedList module', () => {

  let list1;
  let list2;

  beforeEach(() => {
    list1 = new linkedList();
    list2 = new linkedList();
  });

  it('It can merge two linked lists', () => {
    let node3 = {val: 3, next: null};
    let node2 = {val: 2, next: node3};
    let node1 = {val: 1, next: node2};
    list1.head = node1;
    list1.length = 3;
    list2.head = node1;
    list2.length = 3;
    expect(mergeList(list1, list2)).toEqual(list1.head);
  });

  it('It should exist', () => {
    let node3 = {val: 3, next: null};
    let node2 = {val: 2, next: node3};
    let node1 = {val: 1, next: node2};
    list1.head = node1;
    list1.length = 3;
    list2.head = node1;
    list2.length = 3;
    let newList = mergeList(list1, list2);
    console.log(newList);
    expect(newList).toBeDefined();
  });

  it('It should contain a value from list2', () => {
    let node3 = {val: 3, next: null};
    let node2 = {val: 2, next: node3};
    let node1 = {val: 1, next: node2};
    list1.head = node1;
    list1.length = 3;
    list2.head = node1;
    list2.length = 3;
    let newList = mergeList(list1, list2);
    expect(newList.next.next.next.next.val).toEqual(3);
  });
});

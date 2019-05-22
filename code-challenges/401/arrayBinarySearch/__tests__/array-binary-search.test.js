'use strict';

const arrayBinarySearch = require('../array-binary-search.js');

describe('Array-Binary-Search Module', () => {
  let tester = [1, 2, 3, 4, 5, 6];
  let tester2 = [1, 2, 4, 5];
  let val = 3;
  let testVal = 'test';

  it('take a sorted array and return the index of val', () => {
    expect(arrayBinarySearch(tester, val)).toEqual(2);
  });
  it('take a sorted array and return -1 if val doesn not exist', () => {
    expect(arrayBinarySearch(tester2, val)).toEqual(-1);
  });
  it('should not take a string', () => {
    expect(arrayBinarySearch(tester, testVal)).toBeNull();
  });
  it('should only take a array as first param', () => {
    expect(arrayBinarySearch(testVal, val)).toBeNull();
  });
});

'use strict';

const mergeSort = require('../mergeSort.js');


describe('Merge Sort Tests', () => {

  let testArray;

  beforeEach(() => {
    testArray = [2, 4, 3, 5, 1, 7, 6];
  });

  it('should actually sort the array', () => {
    expect(mergeSort).toBeDefined();
    // Act
    let answer = mergeSort(testArray);
    // Assert
    expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('it should only take in an array', () => {
    let badArray = 'thisshouldthrowanerror';
    expect(() => {
      mergeSort(badArray);
    }).toThrow('input not an array');
  });

  it('it should only take an array of all numbers', () => {
    let badStringArray = [1, 3, 4, 'thisshouldthrowanerror', 6];
    expect(() => {
      mergeSort(badStringArray);
    }).toThrow('invalid data in array');
  });

  it('should still sort an array of only length 2', () => {
    let testShort = [5, 2];
    // Act
    let answer = mergeSort(testShort);
    // Assert
    expect(answer).toEqual([2, 5]);
  });
});

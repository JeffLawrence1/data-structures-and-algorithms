'use strict';

const insertionSort = require('../insertionSort.js');


describe('Insertion Sort Tests', () => {

  let testArray;

  beforeEach(() => {
    testArray = [2, 4, 3, 5, 1, 7, 6];
  });

  it('should actually sort the array', () => {
    expect(insertionSort).toBeDefined();
    // Act
    insertionSort(testArray);

    // Assert
    expect(testArray).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('it should only take in an array', () => {
    let badArray = 'thisshouldthrowanerror';
    expect(() => {
      insertionSort(badArray);
    }).toThrow('input not an array');
  });

});

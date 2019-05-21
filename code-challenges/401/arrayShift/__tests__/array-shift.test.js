'use strict';

const arrayShift = require('../array-shift.js');

describe('Array-Shift Module', () => {

  let tester = [1, 2, 4, 5];
  let tester2 = [1, 2, 4];
  let val = 3;

  it('take an array and a value and return the array with the value inserted into the middle', () => {
    expect(arrayShift(tester, val)).toEqual([1, 2, 3, 4, 5]);
  });
  it('take an array and a value and return the array with the value inserted into the middle', () => {
    expect(arrayShift(tester2, val)).toEqual([1, 2, 3, 4]);
  });
  // it('add should not take a string', () => {
  //   expect(arithmetic.add([d, e])).toBeNull();
  // });
});

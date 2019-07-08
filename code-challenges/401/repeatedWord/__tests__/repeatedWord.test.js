'use strict';

const repeatedWord = require('../repeatedWord');

describe('repeatedWord function', () =>{
  it('should only take in a string', () => {
    //arrange
    let badString = [1, 2];
    //act
    //assert
    expect(() => repeatedWord(badString)).toThrow('not a string');
  });

  it('should determine the first repeated word', () => {
    //arrange
    let newString = 'this is a test to see if it can find this';
    //act
    //assert
    expect(repeatedWord(newString)).toBe('this');
  });

  it('should be able to determine first repeated word even if there is punctutation involved', () => {
    //arrange
    let newString = 'th*is, is a te!st to se,e if it c#an find th,i%s';
    //act
    //assert
    expect(repeatedWord(newString)).toBe('this');
  });
});

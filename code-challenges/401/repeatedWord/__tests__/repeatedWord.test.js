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

  // it('should construct a Hash Table with a default size of 5', () => {
  //   //arrange
  //   let hashTable;
  //   let expectedSize = 5;
  //   //act
  //   hashTable = new HashTable();

  //   //assert
  //   expect(hashTable).toBeInstanceOf(HashTable);
  //   expect(hashTable.size).toBeDefined();
  //   expect(hashTable.size).toBe(expectedSize);
  //   expect(hashTable.buckets).toBeDefined();
  //   expect(hashTable.buckets.length).toBe(expectedSize);
  // });

  // it('Successfully returns null for a key that does not exist in the hashtable', () => {
  //   //arrange
  //   let key = 'cat';
  //   let hashTable = new HashTable();
  //   //act
  //   //assert
  //   expect(hashTable.get(key)).toBe(null);
  // });
});

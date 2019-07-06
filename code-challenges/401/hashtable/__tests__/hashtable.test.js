'use strict';

const HashTable = require('../hashtable');

describe('Hash Table', () =>{
  it('should construct a Hash Table', () => {
    //arrange
    let hashTable;
    let expectedSize = 42;
    //act
    hashTable = new HashTable(expectedSize);

    //assert
    expect(hashTable).toBeInstanceOf(HashTable);
    expect(hashTable.size).toBeDefined();
    expect(hashTable.size).toBe(expectedSize);
    expect(hashTable.buckets).toBeDefined();
    expect(hashTable.buckets.length).toBe(expectedSize);
  });

  describe('Hash key function', () => {
    it('should hash cat to 3 with 5 buckets', () => {
      //arrange
      let expectedHash = 3;
      let key = 'cat';
      let hashTable = new HashTable(5);
      //act
      let result = hashTable.hash(key);
      //assert
      expect(result).toBe(expectedHash);
    });

    it('should hash foo to 1 with 5 buckets', () => {
      let expectedHash = 1;
      let key = 'foo';
      let hashTable = new HashTable(5);

      let result = hashTable.hash(key);

      expect(result).toBe(expectedHash);
    });
  });
});





// Hash(key){
//   return key.split('').reduce((prev, curr) => {
//     return prev + curr.charCodeAt(0);
//   }, 0) * 599 % this.size;
// }
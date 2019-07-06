'use strict';

const HashTable = require('../hashtable');

describe('Hash Table', () =>{
  it('should construct a Hash Table', () => {
    //arrange
    let hashTable;
    let expectedSize = 42;
    //act
    hashTable = new HashTable(expectedSize);

    expect(hashTable).toBeInstanceOf(HashTable);
    expect(hashTable.size).toBeDefined();
    expect(hashTable.size).toBe(expectedSize);
    expect(hashTable.buckets).toBeDefined();
    expect(hashTable.buckets).toBe(expectedSize);
  });
});





// Hash(key){
//   return key.split('').reduce((prev, curr) => {
//     return prev + curr.charCodeAt(0);
//   }, 0) * 599 % this.size;
// }
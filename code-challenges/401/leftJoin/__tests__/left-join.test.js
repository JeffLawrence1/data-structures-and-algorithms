'use strict';

const HashTable = require('../../hashtable/hashtable');
const leftJoin = require('../left-join');

describe('Left Join Function', () =>{
  let hasher;
  let hasher1;
  let hasher2;
  beforeEach(() => {
    hasher = new HashTable.HashTable(10);
    hasher.add('cat', 1);
    hasher.add('dog', 12);
    hasher.add('tacocat', 13);
    hasher.add('doggo', 14);
    hasher.add('doggo2', 144);

    hasher1 = new HashTable.HashTable(10);
    hasher1.add('cat', 1);
    hasher1.add('dog', 12);
    hasher1.add('tacocat', 13);
    hasher1.add('doggo', 14);
    hasher1.add('doggo2', 144);

    hasher2 = new HashTable.HashTable(10);
    hasher2.add('cat', 1);
    hasher2.add('dog', 122);
    hasher2.add('tacocat', 133);
    hasher2.add('doggo', 144);
  });

  it('should properly do a left join', () => {
    expect(leftJoin(hasher, hasher1)).toEqual([ [ 'doggo', 14, 14 ],
      [ 'doggo2', 144, 144 ],
      [ 'tacocat', 13, 13 ],
      [ 'dog', 12, 12 ],
      [ 'cat', 1, 1 ] ]);
  });

  it('should properly do a left join including a null value', () => {
    expect(leftJoin(hasher1, hasher2)).toEqual([ [ 'doggo', 14, 144 ],
      [ 'doggo2', 144, null ],
      [ 'tacocat', 13, 133 ],
      [ 'dog', 12, 122 ],
      [ 'cat', 1, 1 ] ]);
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
});

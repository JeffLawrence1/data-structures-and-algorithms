'use strict';

const {HashTable} = require('../hashtable');
const {LinkedList} = require('../hashtable');

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

  it('should construct a Hash Table with a default size of 5', () => {
    //arrange
    let hashTable;
    let expectedSize = 5;
    //act
    hashTable = new HashTable();

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
      //arrange
      let expectedHash = 1;
      let key = 'foo';
      let hashTable = new HashTable(5);
      //act
      let result = hashTable.hash(key);
      //assert
      expect(result).toBe(expectedHash);
    });
  });
});

describe('Singly Linked List Module', () => {

  let newList;

  beforeEach(() => {
    newList = new LinkedList();
  });

  it('Can successfully instantiate an empty linked list', () => {

    expect(newList).toBeDefined();
  });

  it('Can properly insert into the linked list', () => {
    newList.add(1);

    expect(newList.head.value).toEqual(1);
  });
});

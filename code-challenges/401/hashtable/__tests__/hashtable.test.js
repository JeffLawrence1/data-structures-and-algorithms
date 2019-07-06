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

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    //arrange
    let key = 'cat';
    let hashTable = new HashTable();
    //act
    //assert
    expect(hashTable.get(key)).toBe(null);
  });

  it('Successfully handle a collision within the hashtable', () => {
    //arrange
    let key = 'cat';
    let key2 = 'bbt';
    let value = 'pizzacat';
    let hashTable = new HashTable();
    //act
    hashTable.add(key, value);
    hashTable.add(key2, value);
    //assert
    expect(hashTable.contains(key)).toBe(true);
    expect(hashTable.contains(key2)).toBe(true);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    //arrange
    let key = 'cat';
    let key2 = 'bbt';
    let value = 'pizzacat';
    let hashTable = new HashTable();
    //act
    hashTable.add(key, value);
    hashTable.add(key2, value);
    //assert
    expect(hashTable.get(key)).toBe(value);
    expect(hashTable.get(key2)).toBe(value);
  });
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

describe('Hash add function', () => {
  it('should contain cat be true', () => {
    //arrange
    // let expectedHash = 3;
    let key = 'cat';
    let value = 'tacocat';
    let hashTable = new HashTable();
    //act
    hashTable.add(key, value);
    //assert
    expect(hashTable.contains('cat')).toBe(true);
  });
});

describe('Hash get function', () => {
  it('should get tacocat', () => {
    //arrange
    let key = 'cat';
    let value = 'tacocat';
    let hashTable = new HashTable();
    //act
    hashTable.add(key, value);
    //assert
    expect(hashTable.get('cat')).toBe('tacocat');
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
    newList.add(2);

    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(2);
  });

  it('values in linked list works', () => {
    newList.add(1);
    newList.add(2);
    let val = newList.values();

    expect(val).toEqual([1, 2]);
  });
});

'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value){
    if(!value) throw new Error('invalid value');

    const node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  values(){
    let values = [];
    let current = this.head;

    while(current){
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}

class HashTable{
  constructor(size){

    this.size = size || 5;
    this.buckets = new Array(this.size);
  }

  hash(key){
    let hash = key.split('').reduce((prev, cur) => prev + cur.charCodeAt(0), 0) * 599 % this.size;
    return hash;
  }

  add(key, value){
    if(!key) throw new Error('invalid key provided');

    let index = this.hash(key);

    if(!this.buckets[index]){
      this.buckets[index] = new LinkedList();
    }

    try{
      this.buckets[index].add([key, value]);
    }catch(e){
      throw e;
    }
  }
}

module.exports = HashTable;

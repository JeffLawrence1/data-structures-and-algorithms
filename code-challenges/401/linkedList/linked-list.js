'use strict';

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
  }

  insert (val){
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    return node.val;
  }

  includes (val){
    let current = this.head;
    while(current){
      if(current.val === val){
        return true;
      }else{
        current = current.next;
      }
    }
    return false;
  }

  print (){
    let current = this.head;
    let results = [];
    while(current){
      console.log(current.val);
      results.push(current.val);
      current = current.next;
    }
    return results;
  }

  append (val){
    let node = new Node(val);
    let current = this.head;
    while(current){
      if(current.next === null){
        current.next = node;
      }else{
        current = current.next;
      }
    }
  }

  insertBefore (val, newVal){

  }

  insertAfter (val, newVal){

  }
}

module.exports = SinglyLinkedList;

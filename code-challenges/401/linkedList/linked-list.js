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
    node.val = val;
    node.next = this.head;
    this.head = node;
  }

  includes (list, val){
    if(list){
      let current = list.head;
      while(current){
        if(current.val === val){
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  print (){
    let current = this.head;

    while(current.next !== null){
      console.log(current.next.val);
      current = current.next;
    }
  }
}


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

}


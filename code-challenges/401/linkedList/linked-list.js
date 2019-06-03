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
    let node = new Node();
    node.val = val;
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
    while(current){
      console.log(current.val);
      current = current.next;
    }
  }

  append (val){
    let node = new Node();
    node.val = val;
    let current;
    if(this.head === null){
      this.head = node;
    }else{
      current = this.head;
      while(current){
        if(current.next === null){
          current.next = node;
          return val;
        }else{
          current = current.next;
        }
      }
    }
  }

  insertBefore (val, newVal){
    let node = new Node();
    node.val = newVal;
    let current = this.head;
    if(current.val === val){
      node.next = this.head;
      this.head = node;
      return newVal;
    }else{
      while(current){
        if(current.next.val === val){
          node.next = current.next;
          current.next = node;
          return newVal;
        }else{
          return 'node not found';
        }
      }
    }
  }

  insertAfter (val, newVal){
    let node = new Node();
    node.val = newVal;
    let current = this.head;
    while(current){
      if(current.val === val){
        node.next = current.next;
        current.next = node;
        return val;
      }else{
        current = current.next;
      }
    }
    return 'node not found';
  }
}

module.exports = SinglyLinkedList;

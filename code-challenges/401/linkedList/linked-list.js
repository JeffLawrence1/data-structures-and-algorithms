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
    this.length = 0;
  }

  insert (val){
    let node = new Node();
    node.val = val;
    node.next = this.head;
    this.head = node;
    this.length += 1;
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
      this.length += 1;
    }else{
      current = this.head;
      while(current){
        if(current.next === null){
          current.next = node;
          this.length += 1;
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
      this.length += 1;
      return newVal;
    }else{
      while(current){
        if(current.next.val === val){
          node.next = current.next;
          current.next = node;
          this.length += 1;
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
        this.length += 1;
        return newVal;
      }else{
        current = current.next;
      }
    }
    return 'node not found';
  }

  kthFromEnd (k){
    let index = (this.length -k) - 1;
    let current = this.head;
    for(let i = 0; i <= index; i++){
      if(i === index){
        return current.val;
      }else{
        current = current.next;
      }
    }
  }
}

module.exports = SinglyLinkedList;

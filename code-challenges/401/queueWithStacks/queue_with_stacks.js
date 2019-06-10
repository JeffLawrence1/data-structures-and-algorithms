'use strict';

class Node {
  constructor() {
    this.val = null;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.length = 0;
  }

  push(val){
    if (!val) return false;
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop(){
    this.top = this.top.next;
    this.length--;
  }

  peek() {
    if(!this.top){
      return null;
    }else{
      return this.top.val;
    }
  }
}

class PseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  
}

module.exports = PseudoQueue;
'use strict';

class Node {
  constructor(val){
    this.val = val,
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(val){
    if (!val) return false;
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
  }
}

module.exports = {Stack};

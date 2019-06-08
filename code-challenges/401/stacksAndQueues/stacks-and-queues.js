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

  pop(){
    this.top = this.top.next;
  }

  peek() {
    if(!this.top){
      return null;
    }else{
      return this.top.val;
    }
  }

}

module.exports = {Stack};

'use strict';

class Node {
  constructor(val) {
    this.val = val;
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
    let temp = this.top.val;
    this.top = this.top.next;
    this.length--;
    return temp;
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
  enqueue(val){
    this.stack1.push(val);
  }

  dequeue(){
    if(this.stack2.length === 0){
      if(this.stack1.length === 0) return 'queue is empty';
      while(this.stack1.length > 0){
        let x = this.stack1.pop();
        this.stack2.push(x);
      }
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;

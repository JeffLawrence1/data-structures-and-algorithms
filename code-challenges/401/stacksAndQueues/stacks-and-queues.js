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
    let temp = this.top;
    this.top = this.top.next;
    return temp.val;
  }

  peek() {
    if(!this.top){
      return null;
    }else{
      return this.top.val;
    }
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    if (!val) return false;
    let node = new Node(val);

    if(this.back === null){
      this.front = node;
      this.back = node;
    }else{
      this.back.next = node;
      this.back = this.back.next;
    }
  }

  dequeue(){
    let temp = this.front;
    this.front = this.front.next;
    return temp.val;
  }

  peek() {
    if(!this.front){
      return null;
    }else{
      return this.front.val;
    }
  }
}

module.exports = {Stack, Queue};

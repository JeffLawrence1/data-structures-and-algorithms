'use strict';

class Node {
  constructor(value, left, right){
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinarySearchTree {
  constructor(node){
    this.root = node;
  }

  add(node){
    if(!this.root){
      this.root = node;
      return node;
    }

    let currentNode = this.root;
    while(currentNode){
      
    }

    if(node.value < currentNode.value){
      currentNode.left = node;
    }else if(node.value > currentNode.value){
      currentNode.right = node;
    }else{
      //even node values
      throw new Error('value already exists in binary search tree');
    }
  }
}

module.exports = BinarySearchTree;

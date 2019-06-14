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
}

module.exports = BinarySearchTree;

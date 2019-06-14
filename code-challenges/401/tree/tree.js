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

  preOrder(){

  }

  inOrder(){
    let results = [];

    let _walk = node => {
      // L Root R

      //Left
      if(node.left){
        _walk(node.left);
      }

      //Root
      results.push(node.value);

      //Right
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }

  add(node){
    if(!this.root){
      this.root = node;
      return node;
    }
    let currentNode = this.root;
    while(currentNode){
      if(node.value < currentNode.value){
        //go left
        if(!currentNode.left){
          currentNode.left = node;
          break;
        }else{
          currentNode = currentNode.left;
        }
      }else if(node.value > currentNode.value){
        //go right
        if(!currentNode.right){
          currentNode.right = node;
          break;
        }else{
          currentNode = currentNode.right;
        }
      }else{
        //duplicate node values
        throw new Error('value already exists in binary search tree');
      }
    }
  }

}

module.exports = Node, BinarySearchTree;

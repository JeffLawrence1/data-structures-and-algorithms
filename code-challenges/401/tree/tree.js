'use strict';

class Node {
  constructor(value, left, right){
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinaryTree {
  constructor(node){
    this.root = node;
  }
  preOrder(){
    let results = [];

    let _walk = node => {
    // Root L R

      //Root
      results.push(node.value);
      //Left
      if(node.left){
        _walk(node.left);
      }
      //Right
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
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

  postOrder(){
    let results = [];

    let _walk = node => {
    // L R Root

      //Left
      if(node.left){
        _walk(node.left);
      }
      //Right
      if(node.right){
        _walk(node.right);
      }
      //Root
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  breadthFirst(tree){
    if(tree === null || tree === undefined){
      return 'error';
    }
    let storage = [tree.root];
    let current = storage.shift();
    while(current){
      console.log(current.value);
      storage.push(current.left);
      storage.push(current.right);
      current = storage.shift();
    }
  }

  findMaximumValue(tree){
    if(tree === null || tree === undefined){
      return 'error';
    }
    let max = tree.root.value;

    let _walk = node => {
      if(node.left){
        _walk(node.left);
      }
      if(max < node.value){
        max = node.value;
      }
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(tree.root);
    return max;
  }
}

class BinarySearchTree extends BinaryTree{
  constructor(node){
    super(node);
  }

  add(val){
    let node = new Node(val);
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

  contains(val){
    if(super.preOrder().includes(val)){
      return true;
    }else{
      return false;
    }
  }

}

module.exports = {Node, BinaryTree, BinarySearchTree};

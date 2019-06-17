'use strict';

function fizzBuzzTree(tree){
  if (typeof tree !== 'object' || !tree.root.value) return 'Not a valid tree';
  let _walk = (node) => {
    if(node.left){
      _walk(node.left);
    }
    fizzChecker(node);
    if(node.right){
      _walk(node.right);
    }
  };
  _walk(tree.root);
  return tree;
}

function fizzChecker(node){
  if(node.value % 3 === 0 && node.value % 5 === 0){
    node.value = 'fizzbuzz';
  }
  else if(node.value % 3 === 0){
    node.value = 'fizz';
  }
  else if(node.value % 5 === 0){
    node.value = 'buzz';
  }
  else{
    return;
  }
}

module.exports = fizzBuzzTree;

'use strict';

function fizzBuzzTree(tree){
  let _walk = (node) => {
    if(node.left){
      _walk(node.left);
      fizzChecker(node);
    }
    if(node.right){
      _walk(node.right);
      fizzChecker(node);
    }
  };
  _walk(this.root);
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

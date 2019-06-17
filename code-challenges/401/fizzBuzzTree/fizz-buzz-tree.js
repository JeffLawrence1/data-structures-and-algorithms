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



module.exports = fizzBuzzTree;

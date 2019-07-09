'use strict';


// const BinaryTree = require('../tree/tree');

function treeIntersection(tree1, tree2){
  if(!tree1.root || !tree2.root){
    throw new Error('not a tree');
  }
  let treeOne = tree1.preOrder();
  let treeTwo = tree2.preOrder();
  let answerArr = [];
  for(let i = 0; i < treeOne.length -1; i++){
    for(let j = 0; j < treeTwo.length -1; j++){
      if(treeOne[i] === treeTwo[j]){
        answerArr.push(treeOne[i]);
      }
    }
  }
  return answerArr;
}

module.exports = treeIntersection;

'use strict';


const BinaryTree = require('../tree/tree');

function treeIntersection(tree1, tree2){
  let treeOne = tree1.preOrder();
  let treeTwo = tree2.preOrder();
  let answerArr = [];
  for(let i = 0; i < treeOne.length; i++){
    for(let j = 0; j < treeTwo.length; i++){
      if(treeOne[i] === treeTwo[j]){
        answerArr.push(treeOne[i]);
      }
    }
  }
  return answerArr;
}

module.exports = treeIntersection;


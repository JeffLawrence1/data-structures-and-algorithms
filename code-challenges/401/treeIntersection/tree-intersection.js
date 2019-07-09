'use strict';


const BinaryTree = require('../tree/tree');

function treeIntersection(tree1, tree2){
  console.log('here');
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
  console.log(answerArr);
  return answerArr;
}

module.exports = treeIntersection;

let root = new BinaryTree.Node(20);
let ten = new BinaryTree.Node(10);
let twentyFive = new BinaryTree.Node(25);
let two = new BinaryTree.Node(2);
let twentyTwo = new BinaryTree.Node(22);
let thirtyThree = new BinaryTree.Node(33);
let fortyEight = new BinaryTree.Node(48);

root.left = ten;
root.right = twentyFive;
ten.left = two;
ten.right = twentyTwo;
twentyFive.left = thirtyThree;
twentyFive.right = fortyEight;

let root2 = new BinaryTree.Node(203);
let ten2 = new BinaryTree.Node(101);
let twentyFive2 = new BinaryTree.Node(25);
let two2 = new BinaryTree.Node(23);
let twentyTwo2 = new BinaryTree.Node(222);
let thirtyThree2 = new BinaryTree.Node(33);
let fortyEight2 = new BinaryTree.Node(484);

root2.left = ten2;
root2.right = twentyFive2;
ten2.left = two2;
ten2.right = twentyTwo2;
twentyFive2.left = thirtyThree2;
twentyFive2.right = fortyEight2;

let tree = new BinaryTree.BinaryTree(root);
let tree2 = new BinaryTree.BinaryTree(root2);

console.log(treeIntersection(tree, tree2));

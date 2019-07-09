'use strict';

const BinaryTree = require('../tree/tree');
const treeIntersection = require('../tree-intersection');

describe('Tree intersection tests', () => {

  let tree;
  let tree2;
  beforeEach(() => {

    //Tree
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
    
    tree = new BinaryTree.BinaryTree(root);

    //tree2
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
    
    tree2 = new BinaryTree.BinaryTree(root2);
  });


  it('Can successfully find duplicates in two trees', () => {

    expect(treeIntersection(tree, tree2)).toBe([23, 33]);
  });

});

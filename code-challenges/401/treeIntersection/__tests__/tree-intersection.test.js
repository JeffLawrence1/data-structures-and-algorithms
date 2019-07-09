'use strict';

const BinaryTree = require('../../tree/tree');
const treeIntersection = require('../tree-intersection');

describe('Tree intersection tests', () => {

  let tree;
  let tree2;
  let tree3;
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

    //tree3
    //tree2
    let root3 = new BinaryTree.Node(203);
    let ten3 = new BinaryTree.Node(101);
    let twentyFive3 = new BinaryTree.Node(256);
    let two3 = new BinaryTree.Node(234);
    let twentyTwo3 = new BinaryTree.Node(222);
    let thirtyThree3 = new BinaryTree.Node(339);
    let fortyEight3 = new BinaryTree.Node(484);

    root3.left = ten3;
    root3.right = twentyFive3;
    ten3.left = two3;
    ten3.right = twentyTwo3;
    twentyFive3.left = thirtyThree3;
    twentyFive3.right = fortyEight3;

    tree3 = new BinaryTree.BinaryTree(root3);
  });


  it('Can successfully find duplicates in two trees', () => {

    expect(treeIntersection(tree, tree2)).toStrictEqual([25, 33]);
  });

  it('Can successfully operate if there are no duplicates in two trees', () => {

    expect(treeIntersection(tree, tree3)).toStrictEqual([]);
  });

  it('Should only take trees', () => {

    let badString = 'rawrw!!!';
    //act
    //assert
    expect(() => treeIntersection(badString, badString)).toThrow('not a tree');
  });

});

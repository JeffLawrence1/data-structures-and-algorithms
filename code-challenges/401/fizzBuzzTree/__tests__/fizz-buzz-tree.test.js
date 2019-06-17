
'use strict';

const trees = require('../../tree/tree.js');
const fizzBuzzTree = require('../fizz-buzz-tree.js');

//               20
//              /   \
//            10     30
//           /  \   /  \
//          3   22 33   48

describe('fizz buzz tree test', () => {
  let tree;
  // let root;
  beforeEach(() => {

    //root
    let root = new trees.Node(20);
    let ten = new trees.Node(10);
    let thirty = new trees.Node(30);
    let three = new trees.Node(3);
    let twentyTwo = new trees.Node(22);
    let thirtyThree = new trees.Node(33);
    let fortyEight = new trees.Node(48);

    root.left = ten;
    root.right = thirty;
    ten.left = three;
    ten.right = twentyTwo;
    thirty.left = thirtyThree;
    thirty.right = fortyEight;

    tree = new trees.BinaryTree(root);
  });

  it('Can successfully instantiate an empty tree', () => {
    let treeTest = new trees.BinaryTree();
    expect(treeTest).toBeDefined();
    expect(treeTest).toBeInstanceOf(trees.BinaryTree);
  });

  it('Can successfully change divisible by 3 to fizz', () => {
    console.log(tree);
    console.log(tree.root);
    // console.log(fizzBuzzTree(root));
    fizzBuzzTree(tree);
    expect(tree.left.left).toBeDefined();
    expect(tree.left.left).toBe('fizz');
  });

  // it('Can successfully add a left child and right child to a single root node', () => {
  //   let singleRoot2 = new trees.Node(10);
  //   let leftNode = new trees.Node(5);
  //   let rightNode = new trees.Node(15);
  //   let treeTestThree = new trees.BinarySearchTree(singleRoot2);
  //   treeTestThree.add(leftNode);
  //   treeTestThree.add(rightNode);
  //   expect(treeTestThree).toBeDefined();
  //   expect(treeTestThree).toBeInstanceOf(trees.BinarySearchTree);
  //   expect(treeTestThree.root.value).toBe(10);
  //   expect(treeTestThree.root.left.value).toBe(5);
  //   expect(treeTestThree.root.right.value).toBe(15);
  // });

  // it('Can successfully return a collection from a preorder traversal', () => {
  //   let testPre = tree.preOrder();
  //   expect(testPre).toBeDefined();
  //   expect(testPre).toHaveLength(7);
  //   expect(testPre).toEqual([20, 10, 2, 22, 25, 33, 48]);
  // });

  // it('Can successfully return a collection from an inorder traversal', () => {
  //   let testPre = tree.inOrder();
  //   expect(testPre).toBeDefined();
  //   expect(testPre).toHaveLength(7);
  //   expect(testPre).toEqual([2, 10, 22, 20, 33, 25, 48]);
  // });

  // it('Can successfully return a collection from a postorder traversal', () => {
  //   let testPre = tree.postOrder();
  //   expect(testPre).toBeDefined();
  //   expect(testPre).toHaveLength(7);
  //   expect(testPre).toEqual([2, 22, 10, 33, 48, 25, 20]);
  // });

  // it('Contains method working', () => {
  //   expect(tree2).toBeDefined();
  //   expect(tree2).toBeInstanceOf(trees.BinarySearchTree);
  //   expect(tree2.contains(22)).toBeTruthy();
  //   expect(tree2.contains(223)).toBeFalsy();
  // });
});

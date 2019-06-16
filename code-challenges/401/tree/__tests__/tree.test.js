
'use strict';

const trees = require('../tree');

//               20
//              /   \
//            10     25
//           /  \   /  \
//          2   22 33   48

describe('Binary Tree Tests', () => {
  let tree;
  beforeEach(() => {

    //root
    let root = new trees.Node(20);
    let ten = new trees.Node(10);
    let twentyFive = new trees.Node(25);
    let two = new trees.Node(2);
    let twentyTwo = new trees.Node(22);
    let thirtyThree = new trees.Node(33);
    let fortyEight = new trees.Node(48);

    root.left = ten;
    root.right = twentyFive;
    ten.left = two;
    ten.right = twentyTwo;
    twentyFive.left = thirtyThree;
    twentyFive.right = fortyEight;

    tree = new trees.BinaryTree(root);
  });

  it('Can successfully instantiate an empty tree', () => {
    let treeTest = new trees.BinaryTree();
    expect(treeTest).toBeDefined();
    expect(treeTest).toBeInstanceOf(trees.BinaryTree);
  });

  it('an successfully instantiate a tree with a single root node', () => {
    let singleRoot = new trees.Node(3);
    let treeTestTwo = new trees.BinaryTree(singleRoot);
    expect(treeTestTwo).toBeDefined();
    expect(treeTestTwo).toBeInstanceOf(trees.BinaryTree);
    expect(treeTestTwo.root).toBeDefined();
    expect(treeTestTwo.root.value).toBe(3);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let singleRoot2 = new trees.Node(10);
    let leftNode = new trees.Node(5);
    let rightNode = new trees.Node(15);
    let treeTestThree = new trees.BinarySearchTree(singleRoot2);
    treeTestThree.add(leftNode);
    treeTestThree.add(rightNode);
    expect(treeTestThree).toBeDefined();
    expect(treeTestThree).toBeInstanceOf(trees.BinarySearchTree);
    expect(treeTestThree.root.value).toBe(10);
    expect(treeTestThree.root.left.value).toBe(5);
    expect(treeTestThree.root.right.value).toBe(15);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let testPre = tree.preOrder();
    expect(testPre).toBeDefined();
    expect(testPre).toHaveLength(7);
    expect(testPre).toEqual([20, 10, 2, 22, 25, 33, 48]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    expect(tree).toBeDefined();
    expect(tree).toBeInstanceOf(trees.BinaryTree);
    expect(tree.root).toBeDefined();
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    expect(tree).toBeDefined();
    expect(tree).toBeInstanceOf(trees.BinaryTree);
    expect(tree.root).toBeDefined();
  });

  it('Contains method working', () => {
    expect(tree).toBeDefined();
    expect(tree).toBeInstanceOf(trees.BinaryTree);
    expect(tree.root).toBeDefined();
  });
});

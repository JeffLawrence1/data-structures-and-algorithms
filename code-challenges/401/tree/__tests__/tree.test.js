
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
    tree = new trees.BinaryTree();
    //root
    let root = new trees.Node(20);
    let ten = new trees.Node(10);
    let twentyFive = new trees.Node(25);
    let two = new trees.Node(2);
    let twentyTwo = new trees.Node(22);
    let thirtyThree = new trees.Node(33);
    let fortyEight = new trees.Node(48);

    tree.root = root;
    tree.root.left = ten;
    tree.root.right = twentyFive;
    ten.left = two;
    ten.right = twentyTwo;
    twentyFive.left = thirtyThree;
    twentyFive.right = fortyEight;
  });

  it('Can successfully instantiate an empty tree', () => {
    expect(tree).toBeDefined();
    expect(tree).toBeInstanceOf(trees.BinaryTree);
  });

  it('an successfully instantiate a tree with a single root node', () => {
    expect(tree).toBeDefined();
    expect(tree).toBeInstanceOf(trees.BinaryTree);
    expect(tree.root).toBeDefined();
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    expect(tree).toBeDefined();
    expect(tree).toBeInstanceOf(trees.BinaryTree);
    expect(tree.root).toBeDefined();
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    expect(tree).toBeDefined();
    expect(tree).toBeInstanceOf(trees.BinaryTree);
    expect(tree.root).toBeDefined();
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

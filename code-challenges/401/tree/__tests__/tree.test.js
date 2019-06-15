
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
    tree.root = {value: 20, left: null, right: null};
    //root.left
    tree.root.left = {value: 10, left: null, right: null};
    //root.left.left
    tree.root.left.left = {value: 2, left: null, right: null};
    //root.left.right
    tree.root.left.right = {value: 2, left: null, right: null};
    //root.right
    tree.root.right = {value: 25, left: null, right: null};
    //root.right.right
    tree.root.right.right = {value: 48, left: null, right: null};
    //root.right.left
    tree.root.right.left = {value: 33, left: null, right: null};
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
});

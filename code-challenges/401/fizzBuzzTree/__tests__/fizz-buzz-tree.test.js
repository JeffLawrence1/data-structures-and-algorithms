
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

    fizzBuzzTree(tree);
    expect(tree.root.left.left).toBeDefined();
    expect(tree.root.left.left.value).toBe('fizz');
  });

  it('Can successfully change root divisible by 5 to buzz', () => {

    fizzBuzzTree(tree);
    expect(tree.root).toBeDefined();
    expect(tree.root.value).toBe('buzz');
  });

  it('Can successfully change divisible by 3 and 5 to fizzbuzz', () => {

    fizzBuzzTree(tree);
    expect(tree.root.right).toBeDefined();
    expect(tree.root.right.value).toBe('fizzbuzz');
  });

  it('Will not change if not divisible by 3 and 5', () => {

    fizzBuzzTree(tree);
    expect(tree.root.left.right).toBeDefined();
    expect(tree.root.left.right.value).toBe(22);
  });
});

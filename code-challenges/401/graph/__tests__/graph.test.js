'use strict';

const Graph = require('../graph');

describe('Graph Tests', () => {

  let graph;
  let three;
  let seven;

  beforeEach(() => {

    graph = new Graph.Graph();

    const eight = new Graph.Vertex(8);
    const six = new Graph.Vertex(6);
    seven = new Graph.Vertex(7);
    const five = new Graph.Vertex(5);
    three = new Graph.Vertex(3);
    const oh = new Graph.Vertex(0);
    const nine = new Graph.Vertex(9);
    
    graph.addVertex(eight);
    graph.addVertex(six);
    graph.addVertex(seven);
    graph.addVertex(five);
    graph.addVertex(three);
    graph.addVertex(oh);
    graph.addVertex(nine);
    
    graph.addEdge(eight, six);
    graph.addEdge(eight, five);
    graph.addEdge(six, seven);
    graph.addEdge(seven, five);
    graph.addEdge(five, three);
    graph.addEdge(three, oh);
    graph.addEdge(oh, nine);
    graph.addEdge(nine, eight);
  });


  it('Node can be successfully added to the graph', () => {
    expect(graph.size()).toBe(7);
    graph.addNode(19);
    expect(graph.size()).toBe(8);
  });

  it('An edge can be successfully added to the graph', () => {
    graph.addEdge(three, seven);
    expect(graph.pathTo(three, seven)).toBe();
  });

  // it('Should only take trees', () => {

  //   let badString = 'rawrw!!!';
  //   //act
  //   //assert
  //   expect(() => treeIntersection(badString, badString)).toThrow('not a tree');
  // });

});

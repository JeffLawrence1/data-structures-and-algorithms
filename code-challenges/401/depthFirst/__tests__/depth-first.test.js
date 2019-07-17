'use strict';

const Graph = require('../../graph/graph');
const depthFirst = require('../depth-first');

describe('Graph Tests', () => {

  let graph;
  let three;
  let seven;

  beforeEach(() => {

    graph = new Graph.Graph();

    const eight = graph.addNode(8);
    const six = graph.addNode(6);
    seven = graph.addNode(7);
    const five = graph.addNode(5);
    three = graph.addNode(3);
    const oh = graph.addNode(0);
    const nine = graph.addNode(9);
    
    // graph.addVertex(eight);
    // graph.addVertex(six);
    // graph.addVertex(seven);
    // graph.addVertex(five);
    // graph.addVertex(three);
    // graph.addVertex(oh);
    // graph.addVertex(nine);
    
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
    // expect(graph.size()).toBe(7);
    // graph.addNode(19);
    // expect(graph.size()).toBe(8);
  });
});
'use strict';

const Graph = require('../../graph/graph');
const depthFirst = require('../depth-first');

describe('Graph Tests', () => {

  let graph;
  let graph2;
  let three;
  let seven;

  beforeEach(() => {

    graph = new Graph.Graph();
    graph2 = new Graph.Graph();

    const eight = graph.addNode(8);
    const six = graph.addNode(6);
    seven = graph.addNode(7);
    const five = graph.addNode(5);
    three = graph.addNode(3);
    const oh = graph.addNode(0);
    const nine = graph.addNode(9);

    graph.addEdge(eight, six);
    graph.addEdge(eight, five);
    graph.addEdge(six, seven);
    graph.addEdge(seven, five);
    graph.addEdge(five, three);
    graph.addEdge(three, oh);
    graph.addEdge(oh, nine);
    graph.addEdge(nine, eight);

  });


  it('can succesfully conduct a depth first search', () => {

    expect(depthFirst(graph)).toEqual([{'value': 8}, {'value': 5}, {'value': 3}, {'value': 0}, {'value': 9}, {'value': 6}, {'value': 7}]);
  });

  it('will return an invalid message if graph has no nodes', () => {

    expect(depthFirst(graph2)).toEqual('invalid graph');
  });
});

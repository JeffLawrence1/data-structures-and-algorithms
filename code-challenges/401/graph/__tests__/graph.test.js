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
    expect(graph.getNeighbors(three)).toEqual([{'vertex': {'value': 0}, 'weight': 0}, {'vertex': {'value': 7}, 'weight': 0}]);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    
    expect(graph.getNodes()).toEqual([{'value': 8}, {'value': 6}, {'value': 7}, {'value': 5}, {'value': 3}, {'value': 0}, {'value': 9}]);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {

    expect(graph.getNeighbors(seven)).toEqual([{'vertex': {'value': 5}, 'weight': 0}]);
  });

  it('Neighbors are returned with the weight between nodes included', () => {

    expect(graph.getNeighbors(seven)).toEqual([{'vertex': {'value': 5}, 'weight': 0}]);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {

    expect(graph.size()).toEqual(7);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let smallGraph = new Graph.Graph();
    const test = new Graph.Vertex(22);
    smallGraph.addVertex(test);
    smallGraph.addEdge(test, test);
    expect(smallGraph.size()).toEqual(1);
    expect(smallGraph.pathTo(test, test)).toEqual([]);
  });

  it('An empty graph properly returns null', () => {
    let smallGraph = new Graph.Graph();

    expect(smallGraph.size()).toEqual(null);
  });

  it('Can find a path', () => {


    expect(graph.pathTo(seven, three)).toEqual([{'value': 5}, {'value': 7}, {'value': 3}, {'value': 5}]);
  });

  describe('Breadth First Tests', () => {

    it('Can succesfully traverse the graph', () => {

      expect(graph.breadthFirst(seven)).toEqual([{'value': 7}, {'value': 5}, {'value': 3}, {'value': 0}, {'value': 9}, {'value': 8}, {'value': 6}]);
    });

    it('Can succesfully traverse the graph using a different startpoint', () => {

      expect(graph.breadthFirst(three)).toEqual([{'value': 3}, {'value': 0}, {'value': 9}, {'value': 8}, {'value': 6}, {'value': 5}, {'value': 7}]);
    });

    it('An empty graph properly returns null', () => {
      let smallGraph = new Graph.Graph();
      expect(smallGraph.breadthFirst()).toEqual(null);
    });
  });
});


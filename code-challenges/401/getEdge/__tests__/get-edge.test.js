'use strict';

const Graph = require('../../graph/graph');
const getEdge = require('../get-edge');

describe('Graph Tests', () => {

  let graph;
  let cityArr = ['Seattle', 'New York', 'LA', 'Bend', 'Seattle', 'Tokyo'];
  let cityArr2 = ['Seattle', 'Bend', 'LA', 'Vancouver'];
  let cityArr3 = ['Seattle', 'Seattle'];

  beforeEach(() => {

    graph = new Graph.Graph();

    let seattle = graph.addNode('Seattle');
    let bend = graph.addNode('Bend');
    let LA = graph.addNode('LA');
    let NY = graph.addNode('New York');
    let Vancouver = graph.addNode('Vancouver');
    let Tokyo = graph.addNode('Tokyo');

    graph.addBiDirectionalEdge(seattle, bend, 22);
    graph.addBiDirectionalEdge(seattle, NY, 13);
    graph.addBiDirectionalEdge(NY, LA, 120);
    graph.addBiDirectionalEdge(bend, NY, 30);
    graph.addBiDirectionalEdge(bend, LA, 30);
    graph.addBiDirectionalEdge(seattle, Tokyo, 50);
    graph.addBiDirectionalEdge(seattle, Vancouver, 40);

  });


  it('Happy case, can find Vancouver', () => {

    expect(getEdge(graph, cityArr)).toEqual('true $235');
  });

  it('Sad case, cannot find Tokyo', () => {

    expect(getEdge(graph, cityArr2)).toEqual('false $0');
  });

  it('Will return false if you do not actually attempt to go anywhere', () => {

    expect(getEdge(graph, cityArr3)).toEqual('false $0');
  });
});

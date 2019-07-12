'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.weight = weight || 1;
    this.vertex = vertex;
  }
}


class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addValue(value){
    this.addVertex(new Vertex(value));
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(){

  }
}

module.exports = Graph;

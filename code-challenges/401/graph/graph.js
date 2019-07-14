'use strict';

// const util = require('util');

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.weight = weight || 0;
    this.vertex = vertex;
  }
}


class Graph {
  constructor() {
    this._adjacencyList = new Map();
    this.numberOfNodes = 0;
  }

  addNode(value){
    let newNode = this.addVertex(new Vertex(value));
    return newNode;
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
    this.numberOfNodes += 1;
  }

  addEdge(startVertex, endVertex, weight = 0){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('ERROR: invalid vertices');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  addBiDirectionalEdge(vertex_a, vertex_b, weight = 0){
    this.addDirectedEdge(vertex_a, vertex_b, weight);
    this.addDirectedEdge(vertex_b, vertex_a, weight);
  }

  getNodes(startVertex){
    const stack = [];
    const visitedVertices = new Set();
    const parentPath = new Map();

    stack.push(startVertex);
    visitedVertices.add(startVertex);

    while(stack.length){
      const currentVertex = stack.pop();

      console.log(currentVertex);

      const neighbors = this.getNeighbors(currentVertex);

      for(let edge of neighbors){
        const neighborVertex = edge.vertex;

        if(visitedVertices.has(neighborVertex)){
          continue;
        }else{
          visitedVertices.add(neighborVertex);
        }

        stack.push(neighborVertex);
        parentPath.set(neighborVertex, currentVertex);
      }
    }
    return parentPath;
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('ERROR: invalid vertex', vertex);
    }
    return [...this._adjacencyList.get(vertex)];
  }

  pathTo(startVertex, goalVertex){
    const stack = [];
    const visitedVertices = new Set();
    const parentPath = new Map();

    stack.push(startVertex);
    visitedVertices.add(startVertex);

    while(stack.length){
      const currentVertex = stack.pop();

      console.log(currentVertex, goalVertex);
      if(currentVertex === goalVertex){
        return parentPath;
      }

      const neighbors = this.getNeighbors(currentVertex);

      for(let edge of neighbors){
        const neighborVertex = edge.vertex;

        if(visitedVertices.has(neighborVertex)){
          continue;
        }else{
          visitedVertices.add(neighborVertex);
        }

        stack.push(neighborVertex);
        parentPath.set(neighborVertex, currentVertex);
      }
    }
  }

  size(){
    return this.numberOfNodes;
  }
  // prettyPrintAdjacencyList(){

  // }
}


const graph = new Graph();

const eight = new Vertex(8);
const six = new Vertex(6);
const seven = new Vertex(7);
const five = new Vertex(5);
const three = new Vertex(3);
const oh = new Vertex(0);
const nine = new Vertex(9);

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

// console.log(graph);
// console.log(graph.size());
// console.log(graph.getNeighbors(eight));
// console.log(graph.pathTo(eight, six));
console.log(graph.getNodes(five));
// console.log(util.inspect(graph.pathTo(eight, five), false, null, true));
module.exports = Graph;

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
    const parentPath = new Array();

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
        parentPath.push(neighborVertex, currentVertex);
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
    const parentPath = new Array();

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
        parentPath.push(neighborVertex, currentVertex);
      }
    }
  }

  breadthFirst(startNode){
    let visitedSet = new Set();
    let answerArray = [];
    let queue = [];
    queue.push(startNode);
    visitedSet.add(startNode);

    if(this.numberOfNodes === 0){
      return null;
    }

    while(queue.length){
      let deQ = queue.shift();
      answerArray.push(deQ);
      visitedSet.add(deQ);
      const neighbors = this.getNeighbors(deQ);
      for(let j of neighbors){
        let neighbor = j.vertex;
        if(visitedSet.has(neighbor)){
          continue;
        }else{
          visitedSet.add(neighbor);
        }
        queue.push(neighbor);
      }
    }
    return answerArray;
  }




  size(){
    if(this.numberOfNodes === 0){
      return null;
    }
    return this.numberOfNodes;
  }
  // prettyPrintAdjacencyList(){

  // }
}




// console.log(graph);
// console.log(graph.size());
// console.log(graph.getNeighbors(eight));
// console.log(graph.pathTo(eight, six));
// console.log(graph.getNodes(five));
// console.log(util.inspect(graph.pathTo(eight, five), false, null, true));
module.exports = {Graph, Vertex, Edge};

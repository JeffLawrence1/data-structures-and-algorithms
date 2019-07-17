'use strict';

function depthFirst(graph) {

  if(typeof graph === 'string' || typeof graph === 'number'){
    return 'invalid graph';
  }
  else if(graph.size() < 1){
    return 'invalid graph';
  }
  const stack = [];
  const visitedVertices = new Set();
  let result = [];
  let coolArray = graph.getNodes();
  let startVertex = coolArray[0];
  stack.push(startVertex);
  visitedVertices.add(startVertex);
  while(stack.length){
    let currentVertex = stack.pop();
    result.push(currentVertex);
    let neighbors = graph.getNeighbors(currentVertex);
    for(let edge of neighbors){
      let neighborVertex = edge.vertex;
      if(visitedVertices.has(neighborVertex)){
        continue;
      }else{
        visitedVertices.add(neighborVertex);
      }
      stack.push(neighborVertex);
    }
  }
  return result;
}

module.exports = depthFirst;

'use strict';

function getEdge(graph, array){
  let counter = 0;
  let startNode;
  let current;
  let graphArray = graph.getNodes();
  for(let i = 0; i < graphArray.length; i++){
    if(graphArray[i] === array[0]){
      startNode = graphArray[i];
    }
    for(let j = 0; j < array.length; j++){
      current = graph.getNeighbors(startNode);
      if(current.includes(array[j] + 1)){
        counter += current[0].weight;
      }else {
        return false;
      }
    }
  }
}
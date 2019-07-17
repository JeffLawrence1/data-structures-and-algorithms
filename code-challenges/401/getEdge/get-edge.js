'use strict';

function getEdge(graph, array){

  let counter = 0;
  let current;
  let graphArray = graph.getNodes();
  for(let i = 0; i < graphArray.length; i++){
    if(graphArray[i].value === array[0]){
      current = graphArray[i];
    }
  }
  for(let i = 1; i < array.length; i++){

    let neighbor = graph.getNeighbors(current);
    
    let isFound = false;
    for(let j = 0; j < neighbor.length; j++){
      if(neighbor[j].vertex.value === array[i]){
        counter += neighbor[j].weight;
        isFound = true;
        current = neighbor[j].vertex;
        break;
      }
    }
    if(!isFound){
      return false + ' $0';
    }
  }
  return `true $${counter}`;
}

module.exports = getEdge;



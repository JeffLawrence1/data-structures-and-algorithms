'use strict';

function getEdge(graph, array){
  let counter = 0;
  let startNode;
  let current;
  let graphArray = graph.getNodes();
  // console.log(graphArray);
  for(let i = 0; i < graphArray.length; i++){
    if(graphArray[i] === array[0]){
      startNode = array[i];
      // console.log(startNode);
    }
    for(let j = 0; j < array.length; j++){
      current = graph.getNeighbors(startNode);
      // console.log(current[0].vertex);
      // console.log(array[j +1]);
      if(current[j].vertex === array[j + 1]){
        console.log(counter);
        counter += current[0].weight;
      }else {
        return false;
      }
      return counter;
    }
    
  }
}


const Graph = require('../graph/graph');


let graph = new Graph.Graph();
graph.addVertex('Seattle');
graph.addVertex('Bend');
graph.addVertex('LA');
graph.addVertex('New York');
graph.addBiDirectionalEdge('Seattle', 'Bend', 22);
graph.addBiDirectionalEdge('Seattle', 'New York', 13);
graph.addBiDirectionalEdge('New York', 'LA', 120);
graph.addBiDirectionalEdge('Bend', 'New York', 30);
graph.addBiDirectionalEdge('Bend', 'LA', 30);

let cityArr = ['Seattle', 'New York', 'LA'];
let cityArr2 = ['Seattle', 'Bend', 'LA'];

console.log(getEdge(graph, cityArr));
console.log(getEdge(graph, cityArr2));

'use strict';

function getEdge(graph, array){
  console.log(graph);
  console.log(array);
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

// const Graph = require('../graph/graph');


// let graph = new Graph.Graph();
// let seattle = graph.addNode('Seattle');
// let bend = graph.addNode('Bend');
// let LA = graph.addNode('LA');
// let NY = graph.addNode('New York');
// // console.log(seattle);
// graph.addBiDirectionalEdge(seattle, bend, 22);
// graph.addBiDirectionalEdge(seattle, NY, 13);
// graph.addBiDirectionalEdge(NY, LA, 120);
// graph.addBiDirectionalEdge(bend, NY, 30);
// graph.addBiDirectionalEdge(bend, LA, 30);

// let cityArr = ['Seattle', 'New York', 'LA', 'Seattle'];
// let cityArr2 = ['Seattle', 'Bend', 'LA'];

// console.log(getEdge(graph, cityArr));
// console.log(getEdge(graph, cityArr2));



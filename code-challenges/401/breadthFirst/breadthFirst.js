'use strict';


function breadthFirst(startNode){
  let visitedArray = [];
  let answerArray = [];
  for(let i = 0; i < this.numberOfNodes; i++){
    visitedArray[i] = false;
    let queue = [];
    visitedArray[startNode] = true;
    queue.push(startNode);
    while(queue.length){
      let deQ = queue.shift();
      answerArray.push(deQ);
      console.log(deQ);
      let adList = this._adjacencyList.get(deQ);
      for(let j in adList){
        let neighbor = adList[j];
        if(!visitedArray[neighbor]){
          visitedArray[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
  return answerArray;
}

module.exports = breadthFirst;

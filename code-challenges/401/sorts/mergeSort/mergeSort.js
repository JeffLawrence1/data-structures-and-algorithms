'use strict';

function mergeSort(arr){

  if(!Array.isArray(arr)){
    throw 'input not an array';
  }

  if (arr.length === 1) {
    return arr;
  }

  if(arr.length > 1){
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));
  }
}

function merge(left, right){
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while(indexLeft < left.length && indexRight < right.length){
    if(typeof left[indexLeft] !== 'number' || typeof right[indexRight] !== 'number'){
      throw 'invalid data in array';
    }

    if(left[indexLeft] < right[indexRight]){
      result.push(left[indexLeft]);
      indexLeft++;
    }else{
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

module.exports = mergeSort;

'use strict';

function insertionSort(arr){

  if(!Array.isArray(arr)){
    throw 'input not an array';
  }
  for(let i = 1; i < arr.length; i++){

    let j = i -1;
    let temp = arr[i];
    if(typeof j !== 'number'){
      throw 'invalid data in array';
    }

    while(j >= 0 && temp < arr[j]){
      arr[j + 1] = arr[j];
      j = j -1;
    }
    arr[j + 1] = temp;
  }
}

module.exports = insertionSort;

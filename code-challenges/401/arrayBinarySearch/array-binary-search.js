'use strict';

function binarySearch(arr, val){
  let start =0;
  let end = arr.length - 1;
  let mid = 0;

  if(typeof arr !== 'object' || typeof val !== 'number') {return null;}

  while(start <= end){
    mid = Math.floor((start + end) / 2);
    if(arr[mid] < val){
      start = mid + 1;
    }else if(arr[mid] > val){
      end = mid - 1;
    }else{
      return mid;
    }
  }
  return -1;
}

module.exports = binarySearch;

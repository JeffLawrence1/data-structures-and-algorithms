'use strict';

function BinarySearch(arr, val){
  let start =0;
  let end = arr.length - 1;
  let mid = 0;
  let answer = -1;

  while(start <= end){
    mid = Math.floor((start + end) / 2);
    if(arr[mid] < val){
      start = mid + 1;
    }else if(arr[mid] > val){
      end = mid - 1;
    }else{
      answer = mid;
    }
  }
  return answer;
}


'use strict';

function mergeSort(arr){
  let n = arr.length;
  if(arr.length > 1){
    let mid = n / 2;
    let b = arr.slice(0, mid);
    let c = arr.slice(mid);
    // break down the left side
    mergeSort(b);
    // break down the right side
    mergeSort(c);
    // merge the left and the right side together
    merge(b, c, arr);
  }
}

function merge(b, c, a){
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < b && j < c){
    if(b[i] <= c[j]){
      a[k] = b[i];
      i = i + 1;
    }else{
      a[k] = b[i];
      j = j + 1;
    }
    k = k + 1;
  }
  if(i === b.length){
    a.concat(c);
  }else{
    a.concat(b);
  }
  return a;
}

module.exports = mergeSort;



ALGORITHM Merge(b, c, a)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < b && j < c
        if b[i] <= c[j]
            a[k] <-- b[i]
            i <-- i + 1
        else
            a[k] = c[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = b.length
       add remaining items in array c to array a
    else
       add remaining items in array b to array a
       
    return a

'use strict';

function mergeSort(arr){
  let n = arr.length
  if(arr.length > 1){
    let mid = n / 2;
    let b = arr.slice(0, mid);
    let c = arr.slice(mid);
    // break down the left side
    mergeSort(b);
    // break down the right side
    mergeSort(c);
    // merge the left and the right side together
    mergeSort(b, c, arr);
  }
}

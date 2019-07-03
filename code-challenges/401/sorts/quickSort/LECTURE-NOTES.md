#### Lecture Notes: Quick Sort

## Brief description of what this algorithm is, does, and why we care.

Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm, serving as a systematic method for placing the elements of a random access file or an array in order. In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved. Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting.

## Is it more efficient than others? How does it attack the problem differently?

It is more efficient than insertion sort especially when using larger data sets.  For larger data sets it is considerably more efficient.  It's average Big O is (n log(n)) which is the same run time as merge sort. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.

## Learning Objectives
Today students will learn how quick sort works.  

quick sort is not relatively simple as it relies on recursion and multiple functions however it is much more efficient than insertion sort.  

Its average and best case case scenarios result in a Big O of O(n log(n)).  Its absolute worst case scenario could result in a Big O of O(n2) although very rare.

Students should have a basic understanding of implementation, see below, and when to use, which is anything larger than miniscule.

## Include your “Visual” here

input -> [2, 4, 3, 5, 4]

iteration 1 ->[2, 4], [3, 5, 4]

iteration 2 ->[2], [4], [3], [5, 4]

iteration 3 ->[2], [4], [3], [5], [4]

output -> [2, 3, 4, 4, 5]

## Algorithm
Start with creating a function and passing in an array
```
function mergeSort(arr){

}
```
then add an if statement to make sure an array was passed in
```
  if(!Array.isArray(arr)){
    throw 'input not an array';
  }
```
then add another if statement to make sure that the recursion stops when the arrays get down to a length of 1
```
  if (arr.length === 1) {
    return arr;
  }
```
then create another if statement that will create a midpoint, left half and right half from the array and then call another function, merge using recursion
```
  if(arr.length > 1){
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));
  }
```
next create the merge function, this will take the chopped up original array and put it in the correct order, start by declaring the function and the variables you will need
```
function merge(left, right){
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;
```
then create a while loop that will run while the index of the left or right is less than the amount of items in the left and right arrays you passed in.  also check to make sure that each item is actually a number while you run through them.
```
      while(indexLeft < left.length && indexRight < right.length){
    if(typeof left[indexLeft] !== 'number' || typeof right[indexRight] !== 'number'){
      throw 'invalid data in array';
    }
```
then using if statements compare the digits and push them into your results array in the correct order
```
    if(left[indexLeft] < right[indexRight]){
      result.push(left[indexLeft]);
      indexLeft++;
    }else{
      result.push(right[indexRight]);
      indexRight++;
    }
```
lastly combine the results back together and return them
```
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
```

The whole thing put together looks like this
```
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
```

#### Pseudocode
```

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if arr.length > 1
      DECLARE mid <-- n/2
      DECLARE b <-- arr[0...mid]
      DECLARE c <-- arr[mid...n]
      // break down the left side
      Mergesort(b)
      // break down the right side
      Mergesort(c)
      // merge the left and the right side together
      Merge(b, c, arr)

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

```

## Readings and References
## Watch

* [video](https://www.youtube.com/watch?v=TzeBrDU-JaY)

## Read

* [Reading](https://en.wikipedia.org/wiki/Merge_sort)

* [Reading](https://www.geeksforgeeks.org/merge-sort/)

## Bookmark
* [Cheat Sheet](https://www.cheatography.com/pryl/cheat-sheets/sorting-algorithms/)
* [Cheat Sheet](https://www.interviewcake.com/sorting-algorithm-cheat-sheet)

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

input -> [2, 6, 3, 1, 6, 5, 2, 4, 8]

iteration 1 ->[2, 3, 1, 5, 2, 4]  [6, 6, 8]

iteration 2 ->[2, 1, 2] [3, 5, 4] [6, 6, 8]

iteration 3 ->[1, 2, 2]  [3, 4, 5]

output -> [1, 2, 2, 3, 4, 5, 6, 6, 8]

## Algorithm
Start with creating a function and passing in an array, the starting index and the ending index
```
function quickSort(arr, left, right){

}
```
then add an if statement to make sure an array was passed in
```
  if(!Array.isArray(arr)){
    throw 'input not an array';
  }
```
then add another if statement to make sure that the recursion stops when the arrays get down to the low side being less than the high side, inside this if call recursively to run continously which will also call the partition function to move the partition and inside of that function calls the swap function which changes number locations
```
  if(left < right){

    if(typeof arr[left] !== 'number' || typeof arr[right] !== 'number'){
      throw 'invalid data in array';
    }
    // Partition the array by setting the position of the pivot value
    let position = partition(arr, left, right);
    // Sort the left
    quickSort(arr, left, position - 1);
    
    // Sort the right
    quickSort(arr, position + 1, right);
  }
```
next create the partion function which takes in an array, the start index of said array and the end inside this function you are assigning a pivot point which will be the end index a low which will be the start index, a for loop to run over the passed in array that will call the swap function when numbers need to change positions
```
function partition(arr, left, right){
  // set a pivot value as a point of reference
  let pivot = arr[right];
  // create a variable to track the largest index of numbers lower than the defined pivot
  let low = left - 1;
  for( let i = left; i <= right - 1; i++){

    if(arr[i] <= pivot){
      low++;
      swap(arr, i, low);
    }
  }
  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right.
  swap(arr, right, low + 1);
  // return the pivot index point
  return low + 1;
}
```
lastly you will need a swap function which simply changes the postion of two numbers in the array
```
function swap(arr, leftIndex, rightIndex){

  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
```

The whole thing put together looks like this
```
'use strict';

// eslint-disable-next-line no-unused-vars
function quickSort(arr, left, right){
  if(!Array.isArray(arr)){
    throw 'input not an array';
  }

  if(left < right){

    if(typeof arr[left] !== 'number' || typeof arr[right] !== 'number'){
      throw 'invalid data in array';
    }
    // Partition the array by setting the position of the pivot value
    let position = partition(arr, left, right);
    // Sort the left
    quickSort(arr, left, position - 1);
    
    // Sort the right
    quickSort(arr, position + 1, right);
  }
}

function partition(arr, left, right){
  // set a pivot value as a point of reference
  let pivot = arr[right];
  // create a variable to track the largest index of numbers lower than the defined pivot
  let low = left - 1;
  for( let i = left; i <= right - 1; i++){

    if(arr[i] <= pivot){
      low++;
      swap(arr, i, low);
    }
  }
  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right.
  swap(arr, right, low + 1);
  // return the pivot index point
  return low + 1;
}

function swap(arr, leftIndex, rightIndex){

  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
```

#### Pseudocode
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

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

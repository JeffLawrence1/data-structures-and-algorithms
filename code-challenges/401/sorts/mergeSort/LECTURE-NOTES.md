#### Lecture Notes: Merge Sort

## Brief description of what this algorithm is, does, and why we care.

Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide and conquer algorithm.

## Is it more efficient than others? How does it attack the problem differently?

It is more efficient than insertion sort especially when using larger data sets.  However for very small data sets it can be surpassed, very small only.  For larger data sets it is considerably more efficient.

## Learning Objectives
Today students will learn how merge sort works.  

Merge sort is a not relatively simple as it relies on recursion and multiple functions however it is much more efficient than insertion sort.  

Its best case and worst case scenarios all result in a Big O of O(n log(n)).

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
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

## Readings and References
## Watch

* [video](https://www.youtube.com/watch?v=i-SKeOcBwko)

## Read

* [Reading](https://en.wikipedia.org/wiki/Insertion_sort)

* [Reading](https://www.geeksforgeeks.org/insertion-sort/)

## Bookmark
* [Cheat Sheet](https://algs4.cs.princeton.edu/cheatsheet/)

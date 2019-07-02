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
then create a for loop that will run down the length of the passed in array, also create a variable for the previous positioned number and a temp variable to hold a copy of the current position number.
Lastly create another if statement to check each position to insure they are in fact numbers.
```
  for(let i = 1; i < arr.length; i++){

    let j = i -1;
    let temp = arr[i];
    if(typeof arr[j] !== 'number'){
      throw 'invalid data in array';
    }
```
next create a while loop inside the for loop that will compare each number to its previous and switch them if necessary
```
    while(j >= 0 && temp < arr[j]){
      arr[j + 1] = arr[j];
      j = j -1;
    }
```
lastly reassign the number in position j+1 or what is actually i to temp
```
    arr[j + 1] = temp;
```
the whole thing put together looks like
```
function insertionSort(arr){

  if(!Array.isArray(arr)){
    throw 'input not an array';
  }
  for(let i = 1; i < arr.length; i++){

    let j = i -1;
    let temp = arr[i];
    if(typeof arr[j] !== 'number'){
      throw 'invalid data in array';
    }

    while(j >= 0 && temp < arr[j]){
      arr[j + 1] = arr[j];
      j = j -1;
    }
    arr[j + 1] = temp;
  }
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

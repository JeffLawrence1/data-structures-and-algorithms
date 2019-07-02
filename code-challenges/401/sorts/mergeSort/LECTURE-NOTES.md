#### Lecture Notes: Insertion Sort

## Brief description of what this algorithm is, does, and why we care.

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.  It is simple to implement, efficient for small data sets, and stable(doesn't change to order of same numbers).

## Is it more efficient than others? How does it attack the problem differently?

It is generally less efficient than other sorting methods when using larger data sets.  However for smaller data sets it has several advantages which are the ease of implementation, it is stable and can often be done in place(using one array).  For smaller data sets only, the larger they are the worse it becomes.

## Learning Objectives
Today students will learn how insertion sort works.  

Insertion sort is a relatively simple type of sort to implement.  

Its best case scenario is if the data structure to sort is already mostly sorted.  
The worst case is if it is not sorted at all which forces the inner loop to scan and shift all elements every iteration.

Students should have a basic understanding of implementation, see below, and when to use, essentially only on small data sets.

## Include your “Visual” here

input -> [2, 4, 3, 5]

iteration 1 ->[2, 4, 3, 5, 4]

iteration 2 ->[2, 3, 4, 5, 4]

iteration 3 ->[2, 3, 4, 5, 4]

iteration 4 ->[2, 3, 4, 4, 5]

output -> [2, 3, 4, 4, 5]

## Algorithm
Start with creating a function and passing in an array
```
function insertionSort(arr){

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

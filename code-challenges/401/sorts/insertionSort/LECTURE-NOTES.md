#### Lecture Notes: Insertion Sort

## Brief description of what this algorithm is, does, and why we care.

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.  It is simple to implement, efficient for small data sets, and stable(doesn't change to order of same numbers).

## Is it more efficient than others? How does it attack the problem differently?

It is generally less efficient than other sorting methods when using larger data sets.  However for smaller data sets it has several advantages which are the ease of implementation, it is stable and can often be done in place(using one array).  For smaller data sets only, the larger they are the worse it becomes.

Learning Objectives
What
Will
The
Students
Learn
Today
Lecture Flow
Main Point
Supporting Points
Another main point
More details
Go here
Diagram
Include your “Visual” here

Algorithm
Describe in detail how the algorithm works. Include small code snippets to possibly support the points

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

Readings and References
Watch

Video
Read

Article 1
Article 2
Bookmark

Website
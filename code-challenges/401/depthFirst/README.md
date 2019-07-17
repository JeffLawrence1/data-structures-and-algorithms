# Depth First
<!-- Short summary or background information -->
Implementation of a graph depth first traversal function

## Challenge
<!-- Description of the challenge -->
Create a function not inside the graph class that given a graph can traverse the array depth first and return a list in the order traversed

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Ended up using a while loop with a for loop on the inside so the Big O is pretty bad at O(n2).  One loop to run through the stack and the other run through each nodes neighbors

## API
<!-- Description of each method publicly available to your Linked List -->
depthFirst - function that takes a graph and does  a depth first traversal and returns a list of the nodes

## Answer Code
* [code](./depth-first.js)
* [breadthFirst whiteboard](https://photos.app.goo.gl/ZfZoJqiDzJpu3B8H6)
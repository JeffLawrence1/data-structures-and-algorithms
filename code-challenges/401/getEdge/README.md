# Get Edges
<!-- Short summary or background information -->
Implementation of a function that takes a graph and array and returns the price to get to a location

## Challenge
<!-- Description of the challenge -->
Create a function not inside the graph class that given a graph and an array of cities can travel from the start location to the end and return the cost of the trip, or returns false if the trip is not possible to travel with "direct flights" meaning each node must be traversed in order.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Ended up using three loops so the Big O is pretty bad at O(n2).  One loop to find if the start city exists in the graph, another to loop over the path and the last to loop through neighbor nodes

## API
<!-- Description of each method publicly available to your Linked List -->
getEdge - function that takes a graph and array and either returns true with cost amount or false with 0.

## Answer Code
* [code](./getEdge.js)
* [breadthFirst whiteboard](https://photos.app.goo.gl/gZ9kDBirszJk5AEeA)
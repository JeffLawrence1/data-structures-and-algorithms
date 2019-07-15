# Graph
<!-- Short summary or background information -->
Implementation of graph
Implementation of a graph breadth first search function

## Challenge
<!-- Description of the challenge -->
implement a graph with the functionality to addNode, addEdge, getNodes, getNeighbors, and size
implement a breadth first search function for your graph

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Graph - I paid attention to the inclass demo, did some google research, a little planning and got to work, the Big O best case is O(1) for add but grows to O(n2) for get nodes

Breadth First - the Big O is O(V + E) where V is the number of vertices in the graph and E is the number of edges

## API
<!-- Description of each method publicly available to your Linked List -->
Vertex - Vertex class to construct new vertices
Edge - constructs a edge to connect vertices
Graph - constructs a new graph has addNode, addVertex, addEdge, addBiDirectionalEdge, getNodes, getNeighbors, pathTo, and size functions available
breadthFirst - function that performs a breadth first search on a graph
## Answer Code
* [code](./graph.js)
* [breadthFirst whiteboard](https://photos.app.goo.gl/vf19dSCNhiDvwytS9)
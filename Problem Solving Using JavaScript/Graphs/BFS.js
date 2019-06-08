class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    breadthFirstSearchRecursive(start) {
        let data = [];
        let visited = {};

        let dfsHelper = (node) => {
            if (!node) return null;
            data.push(node);
            visited[node] = true;
            this.adjacencyList[node].map(neighbour => {
                if (!visited[neighbour])
                    return dfsHelper(neighbour);
            });
        };
        dfsHelper(start);
        return data;
    }
    breadthFirstSearch(start) {
        let result = [start];
        let queue = [start];
        let visited = {};
        let currentNode = start;

        visited[start] = true;

        while (queue.length) {
            currentNode = queue.shift();
            this.adjacencyList[currentNode].map(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    result.push(neighbor);
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

let graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S','P');
graph.addEdge('S','U');

graph.addEdge('P','X');
graph.addEdge('U','X');

graph.addEdge('P','Q');
graph.addEdge('U','V');

graph.addEdge('X','Q');
graph.addEdge('X','Y');
graph.addEdge('X','V');

graph.addEdge('Q','R');
graph.addEdge('Y','R');

graph.addEdge('Y','W');
graph.addEdge('V','W');

graph.addEdge('R','T');
graph.addEdge('W','T');

console.log(graph.breadthFirstSearch('S'));
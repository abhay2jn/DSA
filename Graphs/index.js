class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] =[];
            return true;
        }
        return false;
    }
    // Connection
    addEdge(val1,val2) {
        if (this.adjacencyList[val1] && this.adjacencyList[val2]) {
            this.adjacencyList[val1].push(val2);
            this.adjacencyList[val2].push(val1);
            return true;
        }
        return false;
    }
    removeEdge(val1,val2) {
        if (this.adjacencyList[val1] && this.adjacencyList[val2]) {
            this.adjacencyList[val1] = this.adjacencyList[val2].filter(v => v !== val2);
            this.adjacencyList[val2] = this.adjacencyList[val1].filter(v => v !== val1);
            return true;
        }
        return false;
    }
    removeVertex(value) {
        if (!this.adjacencyList[value]) {
            return undefined;
        }
        for(let friendss of this.adjacencyList[value]) {
            this.adjacencyList[friendss] = this.adjacencyList[friendss].filter(v => v !== value);
        }
        delete this.adjacencyList[value];
        return this;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("H");
graph.addVertex("T");
graph.addVertex("Y");
graph.addEdge("T","A");
graph.addEdge("B","H");
// graph.removeEdge("H","B");
graph.removeVertex("B");
console.log(graph);
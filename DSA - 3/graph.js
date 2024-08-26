// class Graph {
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1, vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     hasEdge(vertex1, vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2) &&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     display() {
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
            
//         }
//     }
// }

// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")

// graph.addEdge("A","B")
// graph.addEdge("B","C")

// // graph.display()

// // console.log(graph.hasEdge("A","B"));
// // graph.removeEdge("A","B")
// // graph.removeVertex("B")
// // graph.display()


//!////////////////////////!  Graph Ashique

class graph {
    constructor(){
     this.vertices = {}
    }
 
    addVertix(ver){
     if(!this.vertices[ver]){
         this.vertices[ver] = []
     }
    }
 
    addEdge(v1,v2){
     this.vertices[v1].push(v2)
     this.vertices[v2].push(v1)
    }
 
    hasVertix(ver){
     return this.vertices.hasOwnProperty(ver)
    }
 
    display(){
     for(let ver in this.vertices){
         console.log(`${ver} ->> ${this.vertices[ver].join(',')}`);
     }
    }
 
    removeEdge(v1,v2){
     const i1 = this.vertices[v1].indexOf(v2)
     const i2 = this.vertices[v2].indexOf(v1)
 
     if(i1 !== -1 && i2 !== -1){
         this.vertices[v1].splice(i1,1)
         this.vertices[v2].splice(i2,1)
     }
    }
 
    removeVertex(ver){
     if(this.hasVertix(ver)){
         while(this.vertices[ver].length){
             const adjecent = this.vertices[ver].pop()
             this.removeEdge(ver,adjecent)
         }
         delete this.vertices[ver]
     }
    }
 
    findIsolatedVertex(){
     const isolated = []
     for (let ver in this.vertices){
         if(this.vertices[ver].length === 0){
             isolated.push(ver)
         }
     }
     return isolated
    }
 
    dfs(ver, visited = {}){
        visited[ver] = true
        console.log(ver);
 
        for(let vertex of this.vertices[ver]){
            if(!visited[vertex]){
                this.dfs(vertex,visited)
            }
        }
    }
 
    bfs(v){
        const visited = {}
        const queue = [v]
        visited[v] = true
 
        while(queue.length > 0){
            let current = queue.shift()
            console.log(current);
    
            for(let ver of this.vertices[current]){
                if(!visited[ver]){
                    visited[ver] = true
                    queue.push(ver)
                }
            }
        }
    }       
 
    findShortestPath(start, end) {
        const visited = {};
        const queue = [[start]];
        visited[start] = true;

        while (queue.length > 0) {
            let path = queue.shift();
            let node = path[path.length - 1];

            if (node === end) {
                return path;
            }

            for (let neighbor of this.vertices[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    let newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            }
        }

        return null; // No path found
    }

    hasCycle() {
        const visited = {};
        for (let vertex in this.vertices) {
            if (!visited[vertex]) {
                if (this.dfs(vertex, visited)) {
                    return true;
                }
            }
        }
        return false;
    }

    findIsolatedVertices() {
        const isolated = [];
        for (let ver in this.vertices) {
            if (this.vertices[ver].length === 0) {
                isolated.push(ver);
            }
        }
        return isolated;
    }
 
 }
 
 
 
 const gra = new graph()
 
 gra.addVertix(12)
 gra.addVertix(55)
 gra.addVertix(44)
 
 gra.addEdge(12,55)
 gra.addEdge(44,55)
 
 // gra.removeEdge(44,55)
 // console.log(gra.hasVertix(12));
 gra.display()
 
//  gra.bfs(12);
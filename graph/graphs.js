var Vertex = require('./vertex.js')
var Graph = require('./graph.js')
var A = new Vertex("A")
var B = new Vertex("B")
var C = new Vertex("C")
var D = new Vertex("D")
var E = new Vertex("E")
var F = new Vertex("F")
var G = new Vertex("G")
var H = new Vertex("H")


module.exports = {
    graph_bfs_dfs: function () {
        var graph = new Graph()
        graph.addVertexes(A,B,C,D,E,F,G,H)
        graph.addEdge(A,D,0,true)
        graph.addEdge(A,G,0,true)
        graph.addEdge(A,B,0,true)
        graph.addEdge(B,F,0,true)
        graph.addEdge(B,E,0,true)
        graph.addEdge(E,G,0,true)
        graph.addEdge(F,D,0,true)
        graph.addEdge(F,C,0,true)
        graph.addEdge(C,H,0,true)
        return graph
    },
    graph_dijkstra: function() {
        var graph = new Graph()
        graph.addVertexes(A,B,C,D,E,F,G,H)
        graph.addEdge(A,B,4,true)
        graph.addEdge(A,C,3,true)
        graph.addEdge(A,E,7,true)
        graph.addEdge(E,C,8,true)
        graph.addEdge(C,D,11,true)
        graph.addEdge(D,E,2,true)
        
        graph.addEdge(B,C,6,true)
        graph.addEdge(B,D,5,true)
        graph.addEdge(D,F,2,true)
        graph.addEdge(D,G,10,true)  
        graph.addEdge(E,G,5,true)
        graph.addEdge(G,F,3,true)
        
        return graph
    }
    
}



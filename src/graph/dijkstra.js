var glib = require('./graphs.js')
var Graph = new glib.graph_dijkstra
var Heap = require('../data_struct/heap.js')


function dijkstra(graph,start,end) {
    var heap = new Heap('min','distance','distance')
    start.distance = 0
    for (var index = 0; index < graph.allVertexes().length; index++) {
        heap.add(graph.allVertexes()[index])
    }
    
    
    while(!heap.isEmpty()) {
        var u = heap.remove()
        for(var i = 0;i<u.allSiblings().length; i++ ) {
            var v = u.allSiblings()[i]
            
            var tmpDistance = u.distance + length(u,v)
            if(tmpDistance < v.distance ) {
                v.distance = tmpDistance
                v.prev = u
                if(v.id == end.id) finish(v)
            }
        }
    }
    
    function finish(v) {
        console.log('finish')
        var path = ""
        var q = v
        path += q.id+':'
        while(q.prev!=null) {
            path += ' <='+'('+length(q,q.prev)+')'+'=> '+q.prev.id.toString()
            q = q.prev
        }
        console.info(path)
    }
    
    
    function  length(u,v) {
        if(v == null) return Infinity
        var edges = u.allEdges()
        for(var i = 0;i<edges.length;i++) {
            if(edges[i].vertex.id == v.id) {
                return edges[i].weight
            }
        }
        console.error('v is not u sibling',u)
        return Infinity
    }
    
    
    
    heap.show()
}


var start = Graph.getVertex('A')
var end = Graph.getVertex('F')

dijkstra(Graph,start,end)
var glib = require('./graph.js')
var Graph = glib.graph_bfs_dfs
var Queue = require('../data_struct/queue.js')

function bfs(graph,startVertex) {
    var str = []
    var queue =  new Queue()
    visit(startVertex)
        
    function visit(v) {
        if(v.visited) return
        v.visited = true
        str.push(v.id)        
        
        var sortedSiblings = v.allSiblings().sort(function (a,b) {            
            return a.id.charCodeAt(0) - b.id.charCodeAt(0)
        })
        for (var index = 0; index < sortedSiblings.length; index++) {
            var sibling = sortedSiblings[index];
            queue.add(sibling)
        }
        while(!queue.isEmpty()) visit(queue.remove())
    }
    console.log(str)
}

var start = Graph.getVertex('A')
bfs(Graph,start)
Graph.showChildrens()
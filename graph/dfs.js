
var glib = require('./graphs.js')
var Graph = glib.graph_bfs_dfs
var Stack = require('../data_struct/stack.js')

function dfs(graph,startVertex) {
    var str = []
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
            visit(sibling)
        }
    }
    console.log(str)
}

var start = Graph.getVertex('A')
dfs(Graph,start)
Graph.showChildrens()
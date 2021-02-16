var Vertex = require('./vertex.js')


function  Graph() {
    var self = this
    this.list = []
}

Graph.prototype.addVertex = function (vertex) {
    this.list.push(vertex)
}

Graph.prototype.allVertexes = function () {
    return this.list
}

Graph.prototype.addVertexes = function () {
    for(var i = 0;i<arguments.length;i++) {
        this.list.push(arguments[i])
    }
}

Graph.prototype.addEdge = function (vertextFrom,vertexTo,weight,bidirection) {
    this.list[this.list.indexOf(vertextFrom)].addEdge(vertexTo,weight);
    if(bidirection!=undefined && bidirection === true) {
        this.list[this.list.indexOf(vertexTo)].addEdge(vertextFrom,weight);
    }
}

Graph.prototype.getVertex = function(id) {
    for(var i=0;i<this.list.length;i++) {
        if(this.list[i].id == id) return this.list[i]
    }
}

Graph.prototype.allVertextes = function () {
    return this.list
}


Graph.prototype.showChildrens = function () {
    for(var i=0;i<this.list.length;i++) {
        var v = this.list[i]
        console.info('Vertex '+v.id)
        for(var j = 0;j<this.list[i].edges.length;j++) {
            var e = this.list[i].edges[j]
            console.info('\tedge -> '+e.vertex.id+'  (weight:'+e.weight+')' )
        }
    }
}







module.exports = Graph

function  Vertex(id) {
    this.id = id
    this.edges = []
}

Vertex.prototype.addEdge = function(vertex,weight) {
    this.edges.push({
        vertex:vertex,
        weight:weight
    })
}

Vertex.prototype.distance = Infinity

Vertex.prototype.visited = false

Vertex.prototype.prev = null

Vertex.prototype.allEdges = function () {
    return this.edges;
}

Vertex.prototype.allSiblings = function () {
    var vertexes = []
    for(var i=0;i<this.edges.length;i++) {
        vertexes.push(this.edges[i].vertex)
    }
    return vertexes
}


module.exports = Vertex
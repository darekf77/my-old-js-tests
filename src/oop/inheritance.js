function Graph() {
    console.log('hello from graph')
    this.name = "graph"
}

Graph.prototype.size = function () {
    return "super size"
}

Graph.prototype.showName = function () {
    console.info('Name: '+this.name)
}


function Tree() {
    console.log('hello from tree')
    this.name = "treeeee"
}


Tree.prototype = new Graph()
Tree.prototype.constructor = Tree
Tree.prototype.parent = Graph.prototype
Tree.prototype.test = function () {
    console.log('Tree name "'+this.name+'" ,size '+ this.size())
    Graph.prototype.showName.apply(this)
}

Tree.prototype.size = function () {
    // console.log(this.parent.size())
    return "123"
}


var tree = new Tree()
tree.test()


console.info(tree instanceof Object)
console.info(tree instanceof Tree)
console.info(tree instanceof Graph)

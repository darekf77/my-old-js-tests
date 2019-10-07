function  Queue() {
    this.arr = []
}

Queue.prototype.add = function (elem) {
    this.arr.push(elem)
}

Queue.prototype.remove = function (elem) {
    return this.arr.shift()
}

Queue.prototype.isEmpty = function (elem) {
    return this.arr.length == 0
}

// var queue = new Queue()
// queue.add(9)
// queue.add(5)
// console.log(queue.remove()) //9

module.exports = Queue
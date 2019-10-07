function  Stack() {
    this.arr = []
}

Stack.prototype.push = function (elem) {
    this.arr.push(elem)
}


Stack.prototype.pop = function (elem) {
    return this.arr.pop()
}



module.exports = Stack
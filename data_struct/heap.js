function HeapArr() {
    var arr = []
    this.get = function (index,comparefield) {
        var n;        
        if(index <= 0) {
            console.error('*get* index should be mode than zero')
            return
        }
        if(comparefield != undefined) {
            
            return arr[index - 1][comparefield]
        }
        return arr[index - 1]
    }
    this.set = function (index,value) {
        if(index <= 0) {
            console.error('*set* index should be mode than zero')
            return
        }
        arr[index-1] = value
    }
    
    this.pop = function () {
        arr.shift()
    }
    
    this.size = function () {
        return arr.length
    }
    
    this.add = function (value) {
        arr.push(value)
    }
    
    function pow2(n) {
        var c = 1
        var counter = 0
        while(c<n) {
            c = c+c
            ++counter
        }
        return counter
    }
    
    this.show = function (showField) {
        var str = ""
        var last = 0
        var max = 8
        for(var i=0;i<arr.length;i++) {
            var p =  pow2(i+2) 
            if(p> last) {
                last = p
                str += "\n"
                for(var j = 1;j<=max-p;j++) str+='   '
            }
            if(showField!=undefined) str += "("+arr[i][showField]+") "
            else str += "("+arr[i]+") "
            
        }
        return str
    }
}


function Heap(type,comparefield,showField) {    
    if(type == undefined) {
        console.info("set type of heap 'min' or 'max' ")
        return
    }
    if(comparefield == undefined) {
        console.info("set comparation field ")
        return
    }
    if(showField == undefined) {
        console.info("set show field ")
        return
    }
    this.type = type
    this.comparefield = comparefield
    this.showField = showField
    
    this.H = new  HeapArr()    
    
    this.swap = function(indexA,indexB) {
        var tmp = this.H.get(indexA)
        this.H.set(indexA,this.H.get(indexB))
        this.H.set(indexB,tmp)
    }
}


Heap.prototype.isEmpty = function () {
    return this.H.size() == 0
}

Heap.prototype.remove = function () {
    var root = this.getRoot()
    this.H.pop()
    if(this.type === 'max' ) this.buildMax()
    if(this.type === 'min' ) this.buildMin()
    return root
}


Heap.prototype.buildMin = function () {
    for(var i = this.H.size();i>=1;i--) this.hepifyMin(i)
}

Heap.prototype.buildMax = function () {
    for(var i = this.H.size();i>=1;i--) this.hepifyMax(i)
}


Heap.prototype.hepifyMax = function(index_a) {        
    var smallest = index_a
    var left = index_a*2 
    var right = index_a*2+1
    if( left <= this.H.size() && this.H.get(left,this.comparefield) > this.H.get(smallest,this.comparefield) ){
        smallest = left
    }
    if(  right <= this.H.size() && this.H.get(right,this.comparefield) > this.H.get(smallest,this.comparefield) ) {
        smallest = right
    }
    if( smallest != index_a ) {
        this.swap(smallest,index_a)
        this.hepifyMax(smallest)
    }
}

Heap.prototype.hepifyMin = function(index_a) {        
    var smallest = index_a
    var left = index_a*2 
    var right = index_a*2+1
    if( left <= this.H.size() && this.H.get(left) < this.H.get(smallest) ){
        smallest = left
    }
    if(  right <= this.H.size() && this.H.get(right) < this.H.get(smallest) ) {
        smallest = right
    }
    if( smallest != index_a ) {
        this.swap(smallest,index_a)
        this.hepifyMin(smallest)
    }
}

Heap.prototype.getRoot = function () {
    return this.H.size()>0?this.H.get(1):null
}
    
Heap.prototype.add = function (n) {
    this.H.add(n)
    if(this.type === 'max' ) this.buildMax()
    if(this.type === 'min' ) this.buildMin()
}   

Heap.prototype.show = function () {
    console.info(this.H.show(this.showField))
} 
    
    
// var heap = new Heap()
// heap.add(0)
// heap.add(-3)
// heap.add(-100)

// heap.add(3)
// heap.add(6)
// heap.add(7)
// heap.add(20)
// heap.add(16)
// heap.add(8)
// heap.add(10)
// heap.add(15)
// heap.add(2)
// heap.add(5)


// heap.show()

// console.log('root = '+heap.getRoot())
// heap.buildMin()
// heap.show()
// console.log('min root = '+heap.getRoot())
// heap.buildMax()
// heap.show()
// console.log('max     root = '+heap.getRoot())

    
    
module.exports = Heap

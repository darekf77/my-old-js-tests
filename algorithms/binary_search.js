var arr = [3,66,22,44,641,34,76,12,98,7]



var sorted = arr.sort(function (a,b) {
    return a-b;
    
})

console.log(sorted)

var count = 0


function search(n,from,to) {
    if(count++ >= arr.length )  {
        console.log("Number "+n+" not found")
        return
    }
    if(from == undefined) from = 0
    if(to == undefined) to = sorted.length - 1
    console.log(from+" - "+to)
    if(sorted[from] == n) {
        console.log("Founded "+n+" on key: "+from)
        return
    }
    var div = parseInt((to+from)/2)
    if( n < sorted[div-1] ) search(n,from,div-1);
    else search(n,div,to)
}


search(12)
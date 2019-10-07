var arrays = require('./sort_arrays.js')


var arr = arrays.radix

function quicksort(arr) {
    
    sort(arr,0,arr.length-1)
    
    function sort(arr,from,to) {        
        if(from<to) {
            var piwot = partition(arr,from,to)
            sort(arr,from,piwot-1);
            sort(arr,piwot+1,to)
        }       
        
    }
    
    function partition(arr,start,end) {
        var piwot  = arr[end]
        var index = start
        for(var i=start;i<end-1;i++)
            if(arr[i] <= piwot) {
                swap(i,index++)
            }
         swap(index,end)
         return index
    }
    
    function swap(a,b) {
        var tmp = arr[a];
        arr[a] = arr[b]
        arr[b] = tmp
    }
    
    
}

console.info('quick sort')
console.log(arr)
quicksort(arr)
console.log(arr)
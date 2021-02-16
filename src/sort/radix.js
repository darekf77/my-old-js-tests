var arrays = require('./sort_arrays.js')

var arr = arrays.radix

function radix_sort(arr) {
    var power2 = 0
    while (power2++ <=8) {
       for (var i = 0; i < arr.length-1; i++) {
            if( bit(arr[i],power2) > bit(arr[i+1],power2) )
                swap(i,i+1)        
        } 
    }
    
    function bit(n,p2) {
        var pp = 1 << p2
        var d = n & pp
        return d
    }
    
    function swap(a,b) {
        var tmp = arr[a];
        arr[a] = arr[b]
        arr[b] = tmp
    }
    
}



console.log(arr)
radix_sort(arr)
console.log(arr)



    
    
    

function b (nMask, name) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  if(name!=undefined) console.info(name+':\t'+ sMask);
  else console.info(sMask);
}
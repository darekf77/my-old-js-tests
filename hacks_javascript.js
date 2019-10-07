

var arr = [{ id:1,value:2 },{id:2,value:8},{id:3,value:4}]

arr.sort(function (a,b) {
    if(a == b) return 0
    return a.value>b.value?1:-1
})

for (var index = 0; index < arr.length; index++) {
    var element = arr[index];
    console.log(element.id)
}


var p1 = ~(1)
var p2 = 100
b(p1)
b(p2)
var p3 = p1 | p2
console.log(p3)
b(p3)










function b (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  console.info(sMask);
}
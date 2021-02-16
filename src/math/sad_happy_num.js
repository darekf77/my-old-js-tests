
/*

A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the sum of the squares
 of its digits, 
and repeat the process until the number either equals 1 (where it will stay), or 
it loops
endlessly in a cycle which does not include 1. Those numbers for which this 
process ends 
in 1 are happy numbers, while those that do not end in 1 are unhappy numbers 
(or sad numbers).

Example:

7 -> 7*7 = 49 -> 4*4 + 9*9 = 97 -> 9*9 + 7*7 = 130 -> 1*1 + 3*3 = 10 -> 1*1 = 1 ==> HAPPY    

Write a program that will output numbers 1..100 and HAPPY/ SAD information:

1 HAPPY
2 SAD
3 SAD
4 SAD
5 SAD
6 SAD
7 HAPPY
etc.

*/


function getPower(n) {
    var sum = 0;
    var arr = n.toString().split('')
    var tmp;
    for(var i= 0;i<arr.length;i++) {
        tmp = parseInt(arr[i])
        sum += tmp*tmp
    }
    return sum;
}

var allNums = []
var itwasHappy = [];
var itwasSad = [];
var firstNum;
function Start(n, arr) {
    if(arr === undefined) {
        arr = []
    }
    var res = getPower(n);
    if (firstNum === undefined) firstNum = n; 
    if(res == 1) {
        itwasHappy.push(n)
        itwasHappy.unshift(firstNum);
        allNums.push(n)
        return;
    }
    else {
        if(arr.indexOf(res) != -1) {
            console.error("Cycle detected on "+n)
            return;
        }
        if( itwasSad.indexOf(res) == -1 ) {
            arr.push(res);
            allNums.push(n)     
            itwasSad.push(n)
            Start(res, arr);
        }
    }
}

Start.prototype.results = function(){
    for (var i = 0;i<allNums.length;i++) {
        var out = (itwasHappy.indexOf(allNums[i])!=-1)? "HAPPY":"SAD"
        console.log(out+" "+allNums[i])     
    }    
}





module.exports = Start

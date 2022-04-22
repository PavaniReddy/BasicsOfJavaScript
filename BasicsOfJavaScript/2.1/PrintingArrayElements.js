/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"


*/

function printArray(array){
    var k="";
   for (let i = 0; i < array.length; i++) {
     k += array[i] ;
     if(i<array.length-1){
       k+=",";
     }
   }
   return k;
 }
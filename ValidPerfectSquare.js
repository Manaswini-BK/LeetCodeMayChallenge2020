/*Given a positive integer num, write a function which returns True if num is a perfect square else False.
Note: Do not use any built-in library function such as sqrt.
Example 1:
Input: 16
Output: true
Example 2:
Input: 14
Output: false 
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var i = 2, j = Math.floor(num/2),mid;
     if(num<2){
         return true;
     }
     while(i<=j){
         mid = Math.floor((i+j)/2);
         let sqr = mid*mid;
         if(sqr == num)
             return true;
         else if(sqr<num){
             i = mid + 1;
         }
         else{
             j = mid-1;
         }
     }
     return false;
};
/*
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0. 
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    num = num.split('');
    if(num.length == 1) 
        return "0";
    for(let i = 0 ;i<k; i++){
        let j = 0;
        for(j=0;j<num.length-1;j++){
            if(num[j]>num[j+1])
                break;
        }
        num.splice(j,1);
    }
    //to remove the leading zeroes
    while(num.length > 1 && num[0] == "0"){
        num.splice(0,1);
    }
    return num.length == 0? "0" : num.join("");

};
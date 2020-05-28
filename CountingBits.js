/*Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:
Input: 2
Output: [0,1,1]
Example 2:
Input: 5
Output: [0,1,1,2,1,2]
 */
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let numOfOnes = [0];
    if(num == 0)
        return [0];
    
    for(let i = 1; i<=num ;i++){
        let oddOrEven = i & 1;
        let halfOfNum = i >> 1;
        numOfOnes.push(numOfOnes[halfOfNum] + oddOrEven);
             
    }
    return numOfOnes;
    
};
/*Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.
Return the intersection of these two interval lists.

(Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  The intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].)
Example 1:
Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 */
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let aLen = A.length;
    let bLen = B.length;
    let i =0,j=0,result=[];
    while(i<aLen && j<bLen){
        let max = Math.max(A[i][0],B[j][0]);
        let min = Math.min(A[i][1],B[j][1]);
        if(max<=min)
            result.push([max,min]);
        A[i][1]<B[j][1] ? i++ : j++;
    }
    return result;
};
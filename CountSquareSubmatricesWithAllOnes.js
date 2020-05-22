/* Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.
Example 1:
Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.
Example 2:
Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7. 
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let rows = matrix.length, cols = matrix[0].length, squareCount = 0;
    let dp = new Array(rows).fill(0).map(function(){
        return Array(cols).fill(0);
    });
   
    for(let i=0; i<rows; ++i){
        for(let j=0; j<cols; ++j){
           if(i===0 && j>=0)
               dp[0][j] = matrix[0][j];
           else if(j===0 && i>=0)
               dp[i][0] = matrix[i][0];
           else{
               if(matrix[i][j])
                   dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])+1;
           }
            squareCount += dp[i][j];
        }
    }
    return squareCount;
};

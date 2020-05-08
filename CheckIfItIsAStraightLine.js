/* You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
*/
/**
 * @param {number[][]} crd
 * @return {boolean}
 */
var checkStraightLine = function(crd) {
    var slope,slope1,i;
    var len = crd.length;
    if(crd.length == 2){
        return true;
    }
    else{
        (crd[1][0] - crd[0][0])== 0 ? slope = 0 : slope = (crd[1][1] - crd[0][1])/(crd[1][0] - crd[0][0]);
        i = 2;
        while(i<len){
            (crd[i][0] - crd[0][0])== 0 ? slope1 = 0 : slope1 = (crd[i][1] - crd[0][1])/(crd[i][0] - crd[0][0]);
            
            if(slope1 != slope) return false;
            i++;
        }
        return true;
    }
};
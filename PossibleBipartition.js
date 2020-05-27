/*Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.
Each person may dislike some other people, and they should not go into the same group. 
Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.
Return true if and only if it is possible to split everyone into two groups in this way.
Example 1:
Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
Example 2:
Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Example 3:
Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false
 */

var possibleBipartition = function(N, dislikes) {
    // create a grouList board
    // unassigned group is 0, group A is 1, and group B is 2

    const groupList = new Array(N+1).fill(0);
     // create a people list from 0 - N + 1 that store which people they dont like

    const enemyList = Array.from({ length: N+1 }, x => []);
    // create an enemyList,
    // index position represents the person, and its elements = enemy

    dislikes.forEach(function(people) {
        const personA = people[0],personB = people[1];
        enemyList[personA].push(personB);
        enemyList[personB].push(personA);
    });
    // initialized person 1 in group A

    groupList[1] = 1;
    // traverse through all everyone

    for(let i = 1; i <= N; i++) {
    // return false if we can't form the best group
    if (!findGroup(i)) {
        return false;
        }
    }
    return true;
    
    function findGroup(person) {
        // find possible group through the enemy list
        for(let i = 0; i < enemyList[person].length; i++) {
            const enemy = enemyList[person][i];
            // if the person and his/her enemy are under the same group, return false
            if (groupList[enemy] == groupList[person]) {
                return false;
            }
             // if the enemy has his/her own group, skip
             if (groupList[enemy] !== 0) {
                 continue;
            }
            // assign enemy to a group that is oppsite from the person

            groupList[enemy] =(groupList[person] == 1 ? 2 : 1);
            // call the recursion to check each enemy's list

            if (!findGroup(enemy)) {
                return false;
            }
        }
        return true;
    }
};
console.log(possibleBipartition(5,[[1,2],[2,3],[3,4],[4,5],[1,5]]))
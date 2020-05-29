/*There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let inDegrees = new Array(numCourses).fill(0);
    let queue = []; // if indegree is 0 we push it inside queue
    //directed graph denotes [prereq] --> [course]
    //so prerequisites denotes [[course,prereq]]
    for(let [course,prereq] of prerequisites){
        inDegrees[course] += 1;
    }
    for(let i =0; i< inDegrees.length; i++){
        if(inDegrees[i] === 0)
            queue.push(i);
    }
    let cnt = 0;
    while(queue.length){
        let c = queue.pop();
        cnt++;
        for(let [course,prereq] of prerequisites){
            if(prereq === c){
                inDegrees[course]--;
                if(inDegrees[course] === 0)
                    queue.push(course);
            }
        }
    }
    return cnt === numCourses;
};
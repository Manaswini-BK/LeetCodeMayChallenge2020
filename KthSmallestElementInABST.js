/*Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
Example 1:
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let answer;
  
   //Inorder Function traversal as it gives the sorted order of BST
  let traverse = root => {
       if(!root) return;
      
       traverse(root.left);
       k--;
      
       if(k === 0){
           answer = root.val;
           return;
       }
      
       traverse(root.right);
   };
   traverse(root);
   return answer;

};

/* In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
Return true if and only if the nodes corresponding to the values x and y are cousins.

Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (root.val == x || root.val == y)
       return false;
      let xCousin = {}, yCousin = {};
      let i =0;
      function dfs(node, i) {
          if (node.left && node.left.val == x || node.right && node.right.val == x) {
              xCousin['parent'] = node.val;
              xCousin['depth'] = i;
              return;
          }
           else if (node.left && node.left.val == y || node.right && node.right.val == y){
              yCousin['parent'] = node.val;
              yCousin['depth'] = i;
              return;
          }
          if(node.left)
           dfs(node.left, i+1);
          if(node.right)
           node.right && dfs(node.right, i+1);
      } 
      dfs(root,i);
      
      if (xCousin.parent !== yCousin.parent)
          if (xCousin.depth == yCousin.depth)
              return true;
  
      return false;
  }
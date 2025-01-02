/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root == null || root == p || root == q) return root;
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    else if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    else return root;
};
// var lowestCommonAncestor = function (root, p, q) {
//     if (root == null || root == p || 
//     root == q || 
//     (p == root.right && q == root.left) || 
//     (q == root.right && p == root.left)) return root;
//     else if((q.val < root.val && p.val > root.val) || (p.val < root.val && q.val > root.val)) return root;
//     else if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
//     else return lowestCommonAncestor(root.right, p, q);
// };
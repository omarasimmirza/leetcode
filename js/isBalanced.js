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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let res = true

    const dfs = (node, depth) => {
        if(!node) {
            return depth - 1
        }

        if(!node.right && !node.left) {
            return depth
        }

        const leftDepth = dfs(node.left, depth + 1)
        const rightDepth = dfs(node.right, depth + 1)
        if(Math.abs(rightDepth - leftDepth) > 1) {
            res = false
        }

        return Math.max(leftDepth, rightDepth)
    }

    dfs(root, 1)

    return res
};
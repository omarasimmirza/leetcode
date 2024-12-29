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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root === null) {
        return null;
    }

    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

// if (root === null) {
//     return null;
//   }

//   const queue = [root];

//   while (queue.length > 0) {
//     const current = queue.shift();

//     // Swap left and right children
//     [current.left, current.right] = [current.right, current.left];

//     // Add children to the queue for processing
//     if (current.left) {
//       queue.push(current.left);
//     }
//     if (current.right) {
//       queue.push(current.right);
//     }
//   }

//   return root;
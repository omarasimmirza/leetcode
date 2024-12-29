/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    if (originalColor === color) {
        return image;
    }

    function dfs(sr, sc) {
        if (sr < image.length && sr >= 0 && sc < image[0].length && sc >= 0 && image[sr][sc] === originalColor) {
            image[sr][sc] = color;
            dfs(sr + 1, sc);
            dfs(sr, sc + 1);
            dfs(sr - 1, sc);
            dfs(sr, sc - 1);
        }
    }

    dfs(sr, sc);
    return image;
};

// /**
//  * @param {number[][]} image
//  * @param {number} sr
//  * @param {number} sc
//  * @param {number} color
//  * @return {number[][]}
//  */
// var floodFill = function(image, sr, sc, color) {
//     const rows = image.length;
//     const cols = image[0].length;
//     const originalColor = image[sr][sc];

//     if (originalColor === color) {
//         return image;
//     }

//     const stack = [[sr, sc]];
//     while (stack.length > 0) {
//         const [row, col] = stack.pop();

//         if (
//             row >= 0 &&
//             row < rows &&
//             col >= 0 &&
//             col < cols &&
//             image[row][col] === originalColor
//         ) {
//             image[row][col] = color;
//             stack.push([row + 1, col]);
//             stack.push([row - 1, col]);
//             stack.push([row, col + 1]);
//             stack.push([row, col - 1]);
//         }
//     }

//     return image;
// };
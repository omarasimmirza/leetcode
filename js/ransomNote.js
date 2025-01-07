/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    for(let char of ransomNote) {
        if (!magazine.includes(char)) return false;
        else magazine = magazine.replace(char, '');
    }
    return true;
};

// var canConstruct = function (ransomNote, magazine) {
//     let charDict = {};
//     for (let char of magazine) {
//         charDict[char] = (charDict[char] || 0) + 1;
//     }
//     for (let char of ransomNote) {
//         if (!charDict[char] || charDict[char] == 0) {
//             return false; 
//         }
//         charDict[char]--;
//     }
//     return true;
// };
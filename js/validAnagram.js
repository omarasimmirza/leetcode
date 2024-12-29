/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let charDict = {};
    for(let i = 0; i < s.length; i++) {
        charDict[s[i]] = (charDict[s[i]] || 0) + 1;
        charDict[t[i]] = (charDict[t[i]] || 0) - 1; 
    }
    for(let char in charDict) {
        if(charDict[char]) return false;
    }
    return true;
};
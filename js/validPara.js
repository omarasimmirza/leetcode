/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let tracker = []
    let pairs = {'}': '{', ']': '[', ')': '('}
    for(let i = 0; i < s.length; i++) {
        switch(s.charAt(i)) {
            case '{':
            case '[':
            case '(':
                tracker.push(s.charAt(i));
                break;
            case ')':
            case ']':
            case '}':
                if(tracker[tracker.length - 1] == pairs[s.charAt(i)]) {
                    tracker.pop();
                } else {
                    return false;
                }
                break;
            default:
                return false;
        }
    }
    return tracker.length == 0;
};
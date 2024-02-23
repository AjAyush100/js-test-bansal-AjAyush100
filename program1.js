/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (const char of s) {
      if (pairs[char]) { // If it's a closing bracket
        const top = stack.pop();
        if (top !== pairs[char]) {
          return false; // Doesn't match the top opening bracket
        }
      } else { // If it's an opening bracket
        stack.push(char);
      }
    }
  
    return stack.length === 0; // Valid only if all opening brackets are closed
  };
  
  module.exports = { isValid };
  

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = []
    let len = p.length
    
    //corner cases
    if (p.length > s.length) {
      return res
    }
    
    // Use the hash map to store the count of letters in string
    let map = new Map()
    for (const char of p) {
      if(!map.has(char)) {
        map.set(char, 1)
      } else {
        map.set(char, map.get(char) + 1)      
      }
    }
    
    // Move the right edge of the 'door' until length equals to p.length
    for (let i = 0; i < len; i++) {
      if (map.has(s[i])) {
        map.set(s[i], map.get(s[i]) - 1)
      }
    }
    
    // Check first 'door'
    if (isEqual(map)) {
      res.push(0)
    }
    
    // Move the 'door' to right side step by step and check
    for (let i = len; i < s.length; i++) {
      //rightmost letter
      if (map.has(s[i])) {
        map.set(s[i], map.get(s[i]) - 1) //subtract 1 from the value since they have to equal to zero
      } 
      //leftmost letter that has to be removed
      if (map.has(s[i - len])) {
        map.set(s[i-len], map.get(s[i-len]) + 1) //we add 1 because we just throw it away
      }
      if (isEqual(map)) {
        res.push(i - len + 1)
      }
    }
  
  
    return res
  };
  
  
  // when all of the letters in the map have count 0, we know they are equal
  const isEqual = map => {
    for (const [key, value] of map) {
      if (value !== 0) {
          return false
      }
    }
    return true
  }
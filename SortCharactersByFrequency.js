/*Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:
Input:
"tree"
Output:
"eert"
Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:
Input:
"cccaaa"
Output:
"cccaaa"
Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:
Input:
"Aabb"
Output:
"bbAa"
Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters. 
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var arr = s.split('');
    const len = arr.length;
    var hashEle = {};
    for(let i =0;i<len;i++){
        let char = s.charAt(i);
        hashEle[char] = hashEle[char] + 1 || 1;
    }
    var sortedObj = Object.keys(hashEle).sort((i,j)=>hashEle[j] - hashEle[i]);
    let result = '';
    let sortLen = sortedObj.length;
    for(let i =0;i<sortLen;i++){
        let char = sortedObj[i];
        result+= char.repeat(hashEle[char]);
    }
    return result;
};

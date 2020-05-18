var checkInclusion = function(s1, s2) {
    var s1Map={};
    var s2Map={};
    var s1len = s1.length;
    var s2len = s2.length;
    if(s1len>s2len)
    return false;
    for(let i=0;i<s1len;i++){
        s1Map[s1[i]] =  ~~s1Map[s1[i]] + 1;
    }
    for(let i=0;i<s2len;i++){
        s2Map[s2[i]] = ~~s2Map[s2[i]] + 1;
        if(i>=s1len){
            s2Map[s2[i-s1len]] == 1 ? delete s2Map[s2[i-s1len]] : s2Map[s2[i-s1len]]-- ;
        }
        if(isEqual(s2Map,s1Map)){
           return true
        }
    }
    return false;
};
function isEqual(s2Map,s1Map){
    if(Object.keys(s2Map).length != Object.keys(s1Map).length){
        return false;
    }
    for(let key in s2Map){
        if(s2Map[key] !== s1Map[key]){
            return false;
        }
    }
    return true;
}
console.log(checkInclusion("ab","eidboaoo"));
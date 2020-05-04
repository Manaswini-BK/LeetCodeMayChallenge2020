/* Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation. */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    if(num == 1){
        return 0;
    }
    else if(num == 2){
        return 1;
    }
    else{
        num = num.toString(2);
        num = num.split('').map((element) => element == '0'? '1': '0').join('');
        num = parseInt(num,2);
        return num;
    }
};

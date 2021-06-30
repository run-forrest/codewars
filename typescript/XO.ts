/**
 * Check to see if a string has the same amount of 'x's and 'o's. 
 * The method must return a boolean and be case insensitive. The string can contain any char.
 */

// 第一时间想到的方法
export function XO(str: string) {
    str = str.toLowerCase();
    var xNUms = 0, oNUms = 0;
    str.split("").every(function (x) {
        if (x.indexOf("x") !== -1) {
            xNUms ++;
        }
        if(x.indexOf("o") !== -1){
            oNUms ++;
        }
        return true;
    });
    return xNUms === oNUms;
}

//思考片刻后的方法二
export function XO2(str: string) {
    str = str.toLowerCase();
    const xL = str.split("").filter(x => x === 'x').length;
    const oL = str.split("").filter(o => o === 'o').length;
    return xL === oL;
}
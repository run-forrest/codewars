/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
 * the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
 * because it uses the letters A-Z at least once (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it is,
 * False if not. Ignore numbers and punctuation.
 */
export const isPangram = (phrase: string): boolean => {
    phrase = phrase.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split("").every(function (x) {
        return phrase.indexOf(x) !=== -1;
    });
}

// every方法测试一个数组内的所有元素是否都能通过某个指定函数的测试，它返回一个布尔值
//若收到一个空数组，此方法在一切情况下都会返回true
//如果每次返回值都为truthy,则返回true，否则返回false

//方法二：
function isPangram(string){
    return (string.match(/([a-z](?!.*\1)/ig) || []).length === 26;
  }
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    var n = str1.length;
    var k = str2.length;

    var gcds = function (x, y) {
        if (!y) {
            return x;
        }
        return gcds(y, x % y);
    }

    var div = gcds (n, k);

    return str1.slice(0, div);
};


var str1 = "ABCABC";
var str2 = "ABC";

var result = gcdOfStrings(str1, str2);

console.log(result);
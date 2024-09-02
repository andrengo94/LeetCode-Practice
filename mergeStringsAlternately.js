/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function(word1, word2) {
    var mergedString = "";

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) mergedString += word1[i];
        if (i < word2.length) mergedString += word2[i];
    }

    return mergedString;
};

var word1 = "abc";
var word2 = "pqr";

var result = mergeAlternately(word1, word2);

console.log(result);
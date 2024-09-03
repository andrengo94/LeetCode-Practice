/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var booleanArray = [];
    var largest = candies.toSorted((a,b) => a - b)[candies.length - 1];

    for (var i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= largest) {
            booleanArray.push(true);

        } else {
            booleanArray.push(false);
        }
    }
    console.log(candies.toSorted((a,b) => a - b));
    return booleanArray;
};

var candies = [1, 10, 10, 3];
var extraCandies = 3;

var result = kidsWithCandies(candies, extraCandies);

console.log(result);
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (var i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            console.log(i, flowerbed[i])
            i++;
            n--;
        }
    }

    return n <= 0;
};


var flowerbed = [1, 0, 0, 0, 1];
var newFlowers = 1;

var result = canPlaceFlowers(flowerbed, newFlowers);

console.log(result);

var flowerbed = [1, 0, 0, 0, 1];
var newFlowers = 2;

var result = canPlaceFlowers(flowerbed, newFlowers);

console.log(result);


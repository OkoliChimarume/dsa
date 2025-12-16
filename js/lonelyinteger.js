// Given an array of integers, where all elements but one occur twice,
//  find the unique element.

let arr = [1, 2, 3, 4, 3, 2, 1];

function lonelyinteger(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}

console.log(lonelyinteger(arr));
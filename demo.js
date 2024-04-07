
let arr = [1, 2, 4, 5, 6, 7, 9, 10, 3, 8];
let key = 21;

function longestSubarrayWithSum(arr, key) {
    let maxLength = 0;
    let subarray = [];

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            if (currentSum === key && j - i + 1 > maxLength) {
                console.log(j - i + 1);
                maxLength = j - i + 1;
                subarray = arr.slice(i, j + 1);
            }
        }
    }
    return subarray;
}

const result = longestSubarrayWithSum(arr, key);
console.log("Longest subarray with sum", key, ":", result);





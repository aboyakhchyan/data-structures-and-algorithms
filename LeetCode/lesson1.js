// #1

const twoSum = function(nums, target) {
    const cache = {};

    for(let i = 0; i < nums.length; ++i) {
        if(target - nums[i] in cache) {
            return [cache[target - nums[i]], i]
        }

        cache[nums[i]] = i;
    }
};

// 121

var maxProfit = function(prices) {
    let minPrice = Infinity; 
    let maxProfit = 0;

    for (let i = 0; i < prices.length; ++i) {
        minPrice = Math.min(minPrice, prices[i]); 
        maxProfit = Math.max(maxProfit, prices[i] - minPrice); 
    }

    return maxProfit;
};

// 371

var getSum = function(a, b) {
    while(b != 0) {
        let currentBit = (a & b) << 1;
        a = a ^ b;
        b = currentBit;
    }

    return a;
};

// 268

var missingNumber = function(nums) {
    let arr = [...nums].sort((a, b) => a - b);
    if (arr[0] !== 0) return 0;

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i + 1] - arr[i] > 1) {
            return arr[i] + 1;
        }
    }

    return arr.length
};


var reverseBits2 = function(n) {
    let binary = n.toString(2).padStart(32,"0")
    let reversedBinary = binary.split("").reverse().join("");
    let result = parseInt(reversedBinary, 2);

    return result;
};

var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result >>> 0;
};

var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (bracketMap[char]) {
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

console.log(isValid('({]()'))
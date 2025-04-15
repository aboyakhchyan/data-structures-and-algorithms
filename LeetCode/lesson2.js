// 66

var plusOne = function(digits) {
    const num = BigInt(digits.join('')) + BigInt(1);
    const str = String(num);
    const arr = [];

    for(let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }

    return arr.map(item => Number(item));
};


// 122

var maxProfit = function(prices) {
    let genProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            genProfit += prices[i] - prices[i - 1];
        }
    }

    return genProfit;
};

// 67

var addBinary = function(a, b) {
    let sum = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while(i >= 0 || j >= 0 || carry) {
        const bitA = i >= 0 ? Number(a[i]) : 0;
        const bitB = j >= 0 ? Number(b[j]) : 0;

        const currentSum = bitA + bitB + carry;

        if (currentSum === 0) {
            sum = '0' + sum;
            carry = 0;
        } else if (currentSum === 1) {
            sum = '1' + sum;
            carry = 0;
        } else if (currentSum === 2) {
            sum = '0' + sum;
            carry = 1;
        } else if (currentSum === 3) {
            sum = '1' + sum;
            carry = 1;
        }
        i--;
        j--;
    }
    return sum;
};


// 136


var singleNumber = function(nums) {
    const cache = {};

    for(const [i, key] of nums.entries()) {
        if(key in cache) {
            delete cache[key];
            continue;
        }
        cache[key] = i;
    }

    return Number(Object.keys(cache)[0]);
};

// 231

var isPowerOfTwo = function(n) {
    if (n <= 0) return false;

    while (n !== 1) {
        if((n & 1) == 0) {
            n >>= 1;
        }else
            return false;
    }

    return true
};

// 26

var strStr = function(haystack, needle) {
    let index = 0

    for(let i = 0; i < haystack.length; i++) {
        const str = haystack.slice(index++)
        const change = str.startsWith(needle)

        if(change) {
            return index - 1
        }
    }

    return -1
};

// 13

var romanToInt = function(s) {
    const obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}

    let result = 0

    for(let i = 0; i < s.length; i++) {
        const cur = obj[s[i]]
        const next = obj[s[i + 1]]

        if(cur < next) {
            result += next - cur
            i++
        }else {
            result += cur
        }
    }

    return result
};
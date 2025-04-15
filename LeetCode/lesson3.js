// 75

var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if(nums[mid] === 0) {
            ;[nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++
            mid++
        }else if (nums[mid] === 1) {
            mid++
        }else {
            ;[nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

// 11

var maxArea = function(height) {
    let maxArea = 0;
    let left = 0, right = height.length - 1;

    while (left <= right) {
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        let area = h * w;
        maxArea = Math.max(maxArea, area);

        if(height[left] < height[right]) {
            left++
        }else {
            right--;
        }
    }

    return maxArea;
};

// 15


var threeSum = function(nums) {
    const sortedArray = nums.sort((a, b) => a - b);
    const result = [];

    for(let i = 0; i < sortedArray.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = sortedArray.length - 1;

        while (j < k) {
            const currentSum = nums[i] + nums[j] + nums[k];

            if(currentSum === 0) {
                result.push([nums[i], nums[j], nums[k]])

                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            }else if (currentSum < 0) {
                j++;
            }else {
                k--;
            }
        }
    }
    return result;
};

// 36

var isValidSudoku = function(board) {
    for (let i = 0; i < board.length; i++) {
        const rowMap = {};
        const colMap = {};
        const boxMap = {};

        for (let j = 0; j < board.length; j++) {
            if (board[i][j] in rowMap) {
                return false;
            }

            if (Number(board[i][j]) >= 1 && Number(board[i][j]) <= 9) {
                rowMap[board[i][j]] = 1;
            }


            if (board[j][i] in colMap) {
                return false;
            }

            if (Number(board[j][i]) >= 1 && Number(board[j][i]) <= 9) {
                colMap[board[j][i]] = 1;
            }

            const boxRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            const boxCol = 3 * (i % 3) + (j % 3);
            const boxVal = board[boxRow][boxCol];
            if (boxVal !== '.') {
                if (boxVal in boxMap) return false;
                boxMap[boxVal] = 1;
            }


        }
    }
    return  true;
}

// 53

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};


//

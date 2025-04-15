const binarySearchRecursive = (arr, target, start = 0, end = arr.length - 1) => {
    if(start > end) {
        return -1
    }

    const middle = Math.floor((start + end) / 2)

    if(target == arr[middle]) {
        return middle
    }else if(target > arr[middle]) {
        return binarySearchRecursive(arr, target, middle + 1, end)
    }else {
        return binarySearchRecursive(arr, target, start, middle - 1)
    }
}

const binarySearchIterative = (arr, target) => {
    let start = 0
    let end = arr.length - 1

    while(start <= end) {
        const middle = Math.floor((start + end) / 2)

        if(target == arr[middle]) {
            return middle
        }else if(target > arr[middle]) {
            start = middle + 1
        }else {
            end = middle - 1
        }
    }

    return -1
}

const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        if(target == arr[i]) {
            return i
        }
    }

    return -1
}

const jumpSearch = (arr, target) => {
    const n = arr.length;
    let step = Math.floor(Math.sqrt(n)); 
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;  
    }

    
    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1; 
}

console.log(jumpSearch([1, 4, 7, 10, 77, 345], 77))
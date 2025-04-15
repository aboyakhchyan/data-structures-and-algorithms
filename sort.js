const arr = [4, 8, 1, -1, 86, 23, 54]

const swapPointer = (arr, prev, next) => {
    let temp = arr[prev]
    arr[prev] = arr[next]
    arr[next] = temp
}

const bubbleSort = (arr) => {
    for(let i = 0 ; i < arr.length - 1; i++) {
        let flag = false

        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                swapPointer(arr, j, j + 1)
                flag = true
            }
        }

        if(!flag) {
            return
        }
    }
}


const insertionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > current) {
            arr[i] = 
        }
    }
}
console.log(arr)
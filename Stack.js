class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        return this.dataStore[--this.top];
    }

    peek() {
        return this.dataStore[this.top - 1];
    }

    length() {
        return this.top;
    }

    isEmpty() {
        return this.top === 0;
    }    

    clear() {
        this.top = 0;
    }

    toString() {
        let result = '';

        for(let i = 0; i < this.dataStore.length; ++i) {
            result += this.dataStore[i] + '\n';
        }

        return result;
    }
}


function mulBase(num, base) {
    const st = new Stack();

    do {
        st.push(num % base);
        num = Math.floor(num /= base);
    }while (num > 0)
        let covert = '';
        while(st.length() > 0) {
            covert += st.pop();
        }

        return covert;
}

function isPalindrome(arr) {
    const st = new Stack();

    for(let i = 0; i < arr.length / 2; ++i) {
        st.push(arr[i])
    }

    for(let i = (arr.length / 2); i < arr.length; ++i) {
        if(st.pop() !== arr[i]) {
            return false;
        }
    }

    return true;
}


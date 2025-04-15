class DynamicArray {
    constructor(cap = 5) {
        this._cap = cap;
        this._size = 0;
        this._array = new Array(cap).fill(null);
    }

    get size () {
        return this._size;
    }

    get capacity () {
        return this._cap;
    }

    push_back(value) {
        if(this._size === this._cap) {
            this.resize(this._cap * 2);
        }

        this._array[this._size++] = value;
    }

    push_front(value) {
        if(this._cap === this._size) {
            this.resize(this._cap * 2)
        }

        for(let i = this._size; i > 0; --i) {
            this._array[i] = this._array[i - 1];
        }
        this._array[0] = value;
        this._size++;
    }

    insert(position, value) {
        if(this._cap === this._size) {
            this.resize(this._cap * 2);
        }

        for(let i = this._size; i > position; --i) {
            this._array[i] = this._array[i - 1];
        } 

        this._array[position] = value;
        this._size++;
    }

    at(index) {
        if(index < 0 || index >= this._size) {
            throw new Error('Index must be within the array length range.')
        }

        return this._array[index];
    }

    delete() {
        this._cap = 5;
        this._size = 0;
        this._array = new Array(this._cap).fill(null);
    }

    erase(index) {
         for(let i = index; i < this._size - 1; ++i) {
            this._array[i] = this._array[i + 1];
         }
         this._size--;
    }

    resize(newCap) {
        this._cap = newCap;
        const newArray = new Array(this._cap).fill(null);

        for(let i = 0; i < this._array.length; ++i) {
            newArray[i] = this._array[i];
        }
        this._array = newArray;
    }

    toString() {
        if (this._size === 0) return '[]';

        let result = '[';

        for(let i = 0; i < this.size; ++i) {
            result += `${this._array[i]}, `
        }
        result = result.slice(0, -2);

        return result + ']';
    }

    operatorOverloading() {
        return new Proxy (this, {
            get(target, prop) {
                if(!isNaN(prop)) {
                    const index = Number(prop);
                    if(prop >= 0 && prop < target._size) {
                        return target._array[index];
                    }
                    return undefined;
                }
                return target[prop]
            },
            set(target, prop, value) {
                if(!isNaN(prop)) {
                    const index = Number(prop);
                    if(prop >= 0 && prop <= target._size) {
                        if(target._array[index] == null) {
                            target._array[index] = value;  
                            target._size++;
                        }else {
                            target._array[index] = value; 
                        }            
                        return true
                    }

                    throw new Error('Index must be within the array length range.');
                }
                target[prop] = value;
                return true;
            }
        })
    }    
}

const arr = new DynamicArray();
arr.push_back(3);
arr.push_back(4);
arr.push_back(0);
arr.push_back(-2);
arr.push_back(10);
arr.push_back(3);
arr.push_front(1);
arr.insert(2, 505);
arr.insert(2, 23);
arr.erase(1)
arr.erase(1)

arr[0]
arr[0] = 5;

console.log(arr.toString());
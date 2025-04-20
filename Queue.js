const fs = require('node:fs');

class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.pop();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() {
        let result = '';

        for(let i = 0; i < this.dataStore.length; ++i) {
            result += this.dataStore[i] + '\n';
        }

        return result;
    }

    isEmpty() {
        return this.dataStore.length === 0 ? true : false;
    }
}

class Dancer {
    constructor(gender, name) {
        this.gender = gender;
        this.name = name;
    }
}

const males = new Queue();
const females = new Queue();

function dancers(males, females) {
    let names = fs.readFileSync('dancers.txt', 'utf-8').split('\n');

    for(let i = 0; i < names.length; ++i) {
        const gender = names[i].split(' ')[0];
        const name = names[i].split(' ')[1];
        
        if(gender == 'F') {
            females.enqueue(new Dancer(gender, name));
        }else {
            males.enqueue(new Dancer(gender, name));
        }
    }
}

function getDancers (males, females) {
    while(!males.isEmpty() && !males.isEmpty()) {
        const male = males.dequeue();
        const female = females.dequeue();

        console.log(`Male: ${male.name}, Female: ${female.name}`);
    }
}


dancers(males, females);
getDancers(males, females);

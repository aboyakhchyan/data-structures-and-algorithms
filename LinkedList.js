class Node {
    constructor(value) {
        this._value = value;
        this._next = null;
    }
}


class LinkedList {
    constructor () {
        this._head = null;
    }

    push_front(value) {
        const node = new Node(value);

        node._next = this._head;
        this._head = node;
    }


    pop_front() {
        if(this.isEmpty()) {
            throw new ReferenceError('This list have not members');
        }

        this._head = this._head._next;
    }

    insert_after(nodeValue, value) {
        let current = this._head;
        const node = new Node(value);

        while(current !== null) {
            if(current._value === nodeValue) {
                node._next = current._next;
                current._next = node;
                return
            }

            current = current._next;
        }
    }

    erase_after(node) {
        let current = this._head;

        while(current !== null) {
            if(current._value === node && current._next !== null) {
                current._next = current._next._next;
                return
            }

            current = current._next;
        }
    }
    
    front() {
            return this._head ? this._head._value : null;
    }
        
    back() {
        if(this.isEmpty()) {
            return null;
        }

        let current = this._head;

        while(current._next !== null) {
            current = current._next;
        }

        return current._value;
    }

    push_back(value) {
        let current = this._head;
        const node = new Node(value);

        if(this.isEmpty()) {
            this._head = node; 
            return
        }

        while(current._next !== null) {
            current = current._next;
        }

        current._next = node;
    }   
    
    clear() {
        this._head = null;
    }

    isEmpty() {
        if(this._head === null) {
            return true;
        }else {
            return false;
        }
    }

    toString() {
        let current = this._head;
        let result = '';

        while(current !== null) {
            result += `${current._value} -> `;
            current = current._next;
        }

        result += 'null'
        
        return result;
    }

}

// const list  = new LinkedList();
// list.push_front(15);
// list.push_front(10);
// list.push_back(11);
// list.push_front(5);
// list.pop_front();
// list.insert_after(10, -55)
// list.erase_after(-55);
// list.clear();

// console.log(list.toString());
// console.log(list.front());
// console.log(list.back());
// console.log(list.isEmpty());


// 21 

var mergeTwoLists = function(list1, list2) {
    const node = new ListNode();
    let i = list1;
    let j = list2;
    let tmp = node;

    while(i && j) {
        if(i.val < j.val) {
            tmp.next = i;
            tmp = tmp.next;
            i = i.next;
        }else {
            tmp.next = j;
            tmp = tmp.next;
            j = j.next;
        }
    }

    while(i) {
        tmp.next = i;
        tmp = tmp.next;
        i = i.next;
    }

    while(j) {
        tmp.next = j;
        tmp= tmp.next;
        j = j.next;
    }

    return node.next;
};

// 141 

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        if(slow === fast.next) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }  

    return false;
};

// 160 


var getIntersectionNode = function(headA, headB) {
    let i = headA;
    let j = headB;
    let c1 = 0, c2 = 0;

    while(i) {
        i = i.next;
        ++c1;
    }

    while(j) {
        j = j.next;
        ++c2;
    }

    i = headA;
    j = headB;

    if(c2 > c1) {
        let dif = (c2 - c1);
        while(dif > 0) {
            j = j.next;
            --dif;
        }
    }else {
        let dif = (c1 - c2);
        while(dif > 0) {
            i = i.next;
            --dif;
        }
    }

    while(i && j) {
        if(i == j) return i;
        i = i.next;
        j = j.next;
    }

    return null;
};




// 206 

var reverseList = function(head) {
    let current = head;
    let tmp = null;

    while(current !== null) {
        const next = current.next;
        current.next = tmp;
        tmp = current;
        current = next;
    }

    head = tmp;

    return head;
}

// 234

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let current1 = head;
    let current2 = reverse(slow);

    while(current1 && current2) {
        if(current1.val !== current2.val) {
            return false;
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    return true;
};

var reverse = function(head) {
    let tmp = null;
    let current = head;

    while(current !== null) {
        let next = current.next;
        current.next = tmp;
        tmp = current;
        current = next;
    }

    head = tmp;
    return head;
}
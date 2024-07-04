
// 1. Create Node and Linked List and also use the push,pop,unshift.shift,getFirst,getLast,get,set,insert,size,clear method.
class node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}
class linkedList{
    constructor(value) {
        this.head = new node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        let newNode = new node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp;
            temp = prev.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return temp;
    }
    unshift(value) {
        const newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            return this.tail = null;
        }
        return temp;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        if (!this.head) {
            return null;
        }
        let temp = this.head;
        while(temp) {
            if (!temp.next) {
                return temp;
            }
            temp = temp.next;
        }
    }
    get(index) {
        let counter = 0;
        let temp = this.head;
        while (temp) {
            if (counter === index) {
                return temp;
            }
            counter ++;

            temp = temp.next;
        }
        return null;
    }
    set(index,value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    insert(index,value) {
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.length) {
            return this.push(value);
        }
        const newNode = new node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
    size() {
        let temp = this.length;
        return temp;
    }
    clear() {
        this.head = null;
    }
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp;
        let prev = null;
        for(let i = 0; i< this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }
}



const res = new linkedList(2);
res.push(22);
// res.pop();
// res.unshift(0);
// res.shift();
// console.log(res.getFirst()); 
// console.log(res.getLast()); 
// console.log(res.set(1,"ABTA"));
// console.log(res.get(1));
// console.log(res.insert(0,"I wish you know me"));
// console.log(res.size());
// console.log(res.clear());
res.reverse();
console.log(res);


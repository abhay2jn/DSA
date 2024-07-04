class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
        }
        newNode.next = this.first;
        this.first = newNode;
        this.length++;
    }
    min() {
        if (this.length === 0) {
            return undefined;
        }
        let current = this.first;
        let minValue = current.value;
        while (current.next) {
            current = current.next;
            if (current.value < minValue) {
                minValue = current.value;
            }
        }
        return minValue;
    }
}

let res = new Stack(8);
res.push(4);
res.push(69);
res.push(9);
console.log(res.min());
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true) {
            if (newNode.value === temp.value) {
                return undefined;
            }
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                } else {
                    temp = temp.left;
                }
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                } else {
                    temp = temp.right;
                }
            }
        }
    }
    includes(value) {                  // If that value already in tree then it gives true but if that value was not there so it gives false.
        if (!this.root) {
            return false;
        }
        let temp = this.root;
        while(temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.right) {
                temp = temp.right;
            } else if (value === temp.value) {
                return true;
            } else {
                return false;
            }
        }
    }
}


const tree = new  BST();
tree.insert(8);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(10);
console.log(tree.includes(22));
const { text } = require("express");

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
    BFS() {                           // Breath First Search(BFS)
        let current = this.root;
        let queue = [];
        let data= [];
        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            data.push(current.value);
            if (current.left) {
                queue.push(current.left);
            } if (current.right) {
                queue.push(current.right);
            }
        }
        return data;
    }
    DFS(node = this.root, data = []) {    // Depth First Search (DFS) Preorder.
        if (node === null) {
            return data;
        }
        //console.log(data);
        data.push(node.value);
        if (node.left) {
            this.DFS(node.left,data);
        } if (node.right) {
            this.DFS(node.right,data);
        }
        return data;
    }
    DFSpostorder(node = this.root, data = []) {     // Depth First Search (DFS) Postorder
        if (node === null) {
            return data;
        }
        //console.log(data);
        if (node.left) {
            this.DFSpostorder(node.left,data);
        } if (node.right) {
            this.DFSpostorder(node.right,data);
        }
        data.push(node.value);
        return data;
    }
    DFSinorder(node = this.root, data = []) {        // Depth First Search (DFS) Inorder.
        if (node === null) {
            return data;
        }
        console.log(data);
        if (node.left) {
            this.DFSinorder(node.left,data);
        } 
        data.push(node.value);

        if (node.right) {
            this.DFSinorder(node.right,data);
        }
        return data;
    }
}

const tree = new  BST();
tree.insert(4);
tree.insert(7);
tree.insert(2);
tree.insert(1);
tree.insert(8);
// console.log(tree.includes(22));
// console.log(tree.BFS());
// console.log(tree.DFS());
// console.log(tree.DFSpostorder());
console.log(tree.DFSinorder());
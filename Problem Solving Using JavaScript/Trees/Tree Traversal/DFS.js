class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    DFSPreOrder() {
        let data = [];
        function traversal(node) {
            data.push(node.value);
            node.left && traversal(node.left);
            node.right && traversal(node.right);
        }
        traversal(this.root);
        return data;
    }
    DFSInOrder() {
        let data = [];
        function traversal(node) {
            node.left && traversal(node.left);
            data.push(node.value);
            node.right && traversal(node.right);
        }
        traversal(this.root);
        return data;
    }
    DFSPostOrder() {
        let data = [];
        function traversal(node) {
            node.left && traversal(node.left);
            node.right && traversal(node.right);
            data.push(node.value);
        }
        traversal(this.root);
        return data;
    }
}

let bst = new BinarySearchTree;
bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
bst.depthFirstSearchPostOrder();